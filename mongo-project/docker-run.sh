#!/bin/bash

# Zbuduj obraz Docker dla backendu
docker build -t my-backend-app -f Dockerfile.backend .

# Uruchom kontener z zbudowanym obrazem, mapując port 3000 na 4000
docker run --name my-backend-container --network my-network -p 3050:4000 my-backend-app
