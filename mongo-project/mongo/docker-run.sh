docker build -t mongo-demo-image -f Dockerfile.mongo .
docker network create my-network
docker run --name mongo-demo --network my-network --rm -p 27017:27017 -e MONGO_INITDB_DATABASE=mydatabase mongo-demo-image
