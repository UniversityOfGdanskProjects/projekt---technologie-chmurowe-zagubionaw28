#!/bin/bash

# Zastosuj manifesty w namespace
kubectl apply -f deployment-mongo.yaml
kubectl apply -f deployment-backend.yaml
kubectl apply -f deployment-frontend.yaml
