#!/bin/bash
docker network create mynetwork

# Budowanie obrazów
# docker build -t mongo-cloud-image -f Dockerfile.mongo .
# docker build -t backend-cloud-image -f Dockerfile.backend .
docker build -t frontend-cloud-image -f Dockerfile.frontend .

# # Uruchamianie kontenerów
# docker run -p 27017:27017 -d --rm --name mongo-cloud --network mynetwork mongo-cloud-image
# docker run -p 4000:4000 -d --rm --name backend-cloud --network mynetwork backend-cloud-image
# docker run -p 3000:3000 --rm --name frontend-cloud --network mynetwork frontend-cloud-image




# docker tag mongo-cloud-image loppiko/cloud:mongo
# docker push loppiko/cloud:mongo

# docker tag backend-cloud-image loppiko/cloud:express
# docker push loppiko/cloud:express

docker tag frontend-cloud-image loppiko/cloud:react
docker push loppiko/cloud:react