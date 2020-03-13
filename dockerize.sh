if [ $# -eq 0 ]; then
    echo "Ingrese el nombre del contenedor."
    echo "./dockerize containername"
    exit 1
fi


echo "Compiling with yarn ..."
yarn build .
echo "Stop $1 container from docker"
docker stop $1 
echo "Removing $1 container from docker"
docker rm $1
echo "Building container and copying builded files into docker"
docker build . -t react-docker
echo "Creating and running $1 container"
docker run --name=$1 -p 5004:80 react-docker
echo "LISTO"
