###### Running and building the node server running the url shortening web app
Pre-requisites
```
docker engine
```
Command to build the docker(same directory as Dockerfile):
```
Example:
docker build -t muawiakhan/quixel-test-app .
```
Command to run the docker container:
```
Example:
docker run -p <port you want to bind on the host>:8080 -d muawiakhan/quixel-test-app
```
*MAC users this might work slightly differently than Linux based system, they will have to add a port forwarding rule on the VirtualBox VM used as docker-machine and access it via the host IP*
