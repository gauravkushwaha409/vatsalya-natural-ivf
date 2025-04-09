#!/bin/bash

# This script prepares the server environment for deploying the application

echo "🔧 Setting up server environment for Vatsalya-Web-FE deployment..."

# Create Docker network if it doesn't exist
if ! docker network ls | grep -q vatsalya-network; then
  echo "Creating Docker network: vatsalya-network"
  docker network create vatsalya-network
fi

# Create fallback data file for builds
echo "Creating fallback data file for API timeouts during build..."
cat > build-fallback.json << 'EOF'
{
  "code": 200,
  "message": "API Data Placeholder",
  "data": {
    "records": [],
    "data": { "records": [] },
    "service": { "faq": [] }
  }
}
EOF

echo "✅ Server environment setup complete!"
echo ""
echo "To make the setup complete, ensure these GitHub Secrets are set:"
echo "- SSH_PRIVATE_KEY: Your SSH private key for connecting to the server"
echo "- SSH_USER: Username for the server"
echo "- SSH_IP: Server IP address"
echo "- NEXT_PUBLIC_API_URL: The API URL for the application"
echo "- GMAIL_USERNAME and GMAIL_PASSWORD: For sending email notifications"
echo ""
echo "🚀 Your deployment pipeline is ready to use!" 