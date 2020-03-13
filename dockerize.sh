yarn build .
docker stop pago 
docker rm pago
docker build . -t react-docker
docker run --name=pago -p 5004:80 react-docker
