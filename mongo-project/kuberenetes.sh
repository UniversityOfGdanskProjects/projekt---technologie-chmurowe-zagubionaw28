#!/bin/bash

# Utwórz namespace
kubectl apply -f namespace.yaml

# Zastosuj manifesty w namespace
kubectl apply -f ./mongo/mongo-deployment.yaml -n my-application
kubectl apply -f backend-deployment.yaml -n my-application
kubectl apply -f ./frontend/frontend-deployment.yaml -n my-application
