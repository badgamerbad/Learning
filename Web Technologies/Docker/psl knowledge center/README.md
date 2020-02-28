# Pledge to Docker
Docker helps to create a container which looks like VMs but it is different

    Mobi is the name of the aqua Whale in docker icon

- just similar to real world application - we pack all the goods in a shipping `big container` and send it across (via railway, airways etc)
- in programming we have local, stage, prod enviorments and our code should work in all.

### VMs vs Docker Containers
VMs | Containers
---- | ----
long | short - delete after test
more resources | less resources
<img src="vms.PNG" alt="VMx" width="300px;"> | <img src="containers.PNG" alt="containers" width="300px;">
long time to boot up | just in time
fewer instances can be created on a server | many on server

## Container
Defination - Containers are an `application-centric` way to deliver high performing, scalable applications on the infrastructure of your choice

    self contained enviornment build using one or more images (created from docker image)
- 1 process per container
- on windows we create windows containers
- on linux we create linux containers
- create images from the container
- concept `Volume` is used to pertain the data when the containers are deleted

### Why Container
<img src="why_containers.PNG" alt="why containers" width="500px;">

- Works accross all env
- provides a clarity of env 
    - ex OS, technology stacks
- one docker server can have multiple containers which can have different OS, settings etc
- Reasons why we need docker
    - host a website
    - start mongo db with different version
    - host an ansible server
    - test my application
    - Host LDAP server
- orchestrating
    - <img src="orchestrating-containers.PNG" alt="why containers" width="450px;">

### Contains
- made up of 1 image or `no` image
    - lightweight OS
- libraries
- application code

### Provides Isolation
- we create a VM to create a isolated env like old version of software
- but they are heavyweight - relies on OS package manager
- for VMs we have to select OS
- but container are lightweight - uses `OS level virtualization`

## Installation and config
    inside windows and mac docker creates linux VM called `MOBY`

- Windows
    - we need `hypervisor (Hyper V) software` to create windows VMs

## Architecture
<img src="architecture.PNG" alt="why containers" width="500px;">

### client
- ask the host to build or create the containers
- specify which container need how much resources (RAM, HDD, CPU), default is shared
- dynamically specify whether caching (redis) is to be enabled or after the container is created then enable it

### Host
- computer running docker engine
- windows OS cannot be a host - docker creates a linux VM (known as mobi) and that is the HOST
- linux can be directly a HOST
- has the docker deamon (application to run, pull container)
    - used to build run and distribute containers
- creates the container with images
- use redis for caching

#### In depth
<img src="docker-host.PNG" alt="why containers" width="500px;">

- here image has `nginx` which is a `repo` and `latest` is a version, images occupy hadrdisks space
- containers are running version of `images` so they occupy the RAM, here `websvr1` is its name
- 80 is the port, ie container has own IP and port

### Registry
- server for docker daemon to fetch repositories and images
- official is docker hub

### images
- they are not `templates` as of VMs
- read only layer of the file system that never changes (blue print of the running container)
- we can modify the image and create or recreate the container(s)
- we cannot delete it if there is a container running on it

<img src="docker-images.PNG" alt="why containers" width="400px;">

1 container for `dev` and other for `staging`

### Docker file
a file containing docker commands to configure and build images from existing images and other ingredients

### Repositories
set of images on local docker or register server

## Docker Hub
its like git hub

    https://hub.docker.com

official repo provied by the docker to store container images created by official community members

```
docker pull mysql:8
docker pull mysql:latest

docker images // provide list of images locally
docker image pull <name> // fetch from hub
docker rm <image Id> // rm from local
docker image inspect <image id> // view details of image
```