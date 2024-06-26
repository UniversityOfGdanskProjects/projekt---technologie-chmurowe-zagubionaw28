#!/bin/bash
docker build -t react-demo-image -f Dockerfile.frontend .
docker run --name my-react-app-container --network my-network -p 3001:3000 react-demo-image