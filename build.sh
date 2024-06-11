#!/bin/bash

set -e

# Navigate to the client directory and install dependencies
echo "Installing client dependencies..."
cd client
npm install

# Build the client
echo "Building client..."
npm run build

# Navigate back to the root directory
cd ..

# Navigate to the server directory and install dependencies
echo "Installing server dependencies..."
cd server
npm install

# Ensure the .bin directory and its contents have execute permissions
chmod -R +x node_modules/.bin

# Navigate back to the root directory
cd ..

echo "Build completed."
