kubectl delete pods --all

kubectl delete -f deployment-backend.yaml
kubectl delete -f deployment-frontend.yaml
kubectl delete -f deployment-mongo.yaml