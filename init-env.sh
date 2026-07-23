#!/bin/bash

echo "=================================================="
echo "Initializing environment files for ChitChat..."
echo "=================================================="

# Server setup
if [ -d "server" ]; then
  echo "Processing server environment..."
  if [ ! -f "server/.env" ]; then
    if [ -f "server/.env.example" ]; then
      cp "server/.env.example" "server/.env"
      echo "  ✔ Created server/.env from server/.env.example"
    else
      cat <<EOT > server/.env
PORT=3000
MONGODB_URI=mongodb://localhost:27017/chitchat
JWT_SECRET=chitchat_jwt_secret_key_change_in_production
EOT
      echo "  ✔ Generated server/.env file"
    fi
  else
    echo "  ℹ server/.env already exists."
  fi
fi

# Client setup
if [ -d "client" ]; then
  echo "Processing client environment..."
  if [ ! -f "client/.env" ]; then
    cat <<EOT > client/.env
NUXT_PUBLIC_API_BASE=http://localhost:3000
NUXT_PUBLIC_SOCKET_URL=http://localhost:3000
EOT
    echo "  ✔ Generated client/.env file"
  else
    echo "  ℹ client/.env already exists."
  fi
fi

echo "--------------------------------------------------"
echo "Environment initialization complete! Run 'docker compose up -d --build' to start."
