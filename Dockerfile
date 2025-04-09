# Multi-stage build for efficient caching and smaller final image
FROM node:22-alpine AS deps
WORKDIR /app

# Install only essential build dependencies
RUN apk add --no-cache libc6-compat

# Copy package files and install dependencies
COPY package.json package-lock.json ./
RUN npm ci

# Build stage
FROM node:22-alpine AS builder
WORKDIR /app

# Copy node_modules and source code
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Set build arguments and environment variables
ARG NEXT_PUBLIC_API_URL
ENV NEXT_PUBLIC_API_URL=$NEXT_PUBLIC_API_URL
ENV NODE_OPTIONS="--max-http-header-size=16384 --max-old-space-size=4096"
ENV NEXT_TELEMETRY_DISABLED=1

# Use fallback data for build if it exists
RUN if [ -f /app/build-fallback.json ]; then echo "Using fallback data for build"; fi

# Build with increased timeout tolerance
RUN npm run build

# Production image
FROM node:22-alpine AS runner
WORKDIR /app

# Production environment settings
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Copy built application
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/next.config.ts ./next.config.ts

# Health check
HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 \
  CMD wget --spider -q http://localhost:3000 || exit 1

# Expose port and start
EXPOSE 3000
CMD ["npm", "start"]