# Single stage build
FROM node:22-alpine
WORKDIR /app

# Build arguments for environment variables
ARG NEXT_PUBLIC_API_URL=https://api.vatsalya.com.np/api/v1
ARG NODE_ENV=development


# Set environment variables
ENV NEXT_PUBLIC_API_URL=$NEXT_PUBLIC_API_URL
ENV NODE_ENV=$NODE_ENV

# Install necessary build dependencies
# RUN apk add --no-cache python3 make g++ libc6-compat

# Copy the entire application
COPY . .

# Install dependencies and build
RUN npm install

RUN npm run build

# Expose port
EXPOSE 3000

# Start the application
CMD ["npm", "start"]