# NodeApi-Docker-Kubernetes
Node express api docker image running on azure kubernetes cluster.

# Docker
DockerFile has all required configuration, follow the Docker links to generate a docker image and 
create a docker image for example "hvglabacr.azurecr.io/nodeapifork8s:V1" and push into ACR from Docker CLI.

# Azure Container Registory (ACR)

Create a Azure container registory (ACR) and updated the image registory name in nodeapi.deployment.yaml file
<ACR_NAME>.azurecr.io/<DOCKER_IMAGE_NAME>:V1 

# Additional Information
1) Follow the MSDN below link to setup ACR
    https://docs.microsoft.com/en-us/azure/container-registry/container-registry-get-started-portal

2) Follow the MSDN link to push Docker image into the ACR.
    https://docs.microsoft.com/en-us/azure/container-registry/container-registry-get-started-docker-cli

3) Follow the Docker link for generating the docker image.
    https://docs.docker.com/develop/develop-images/baseimages/

4) Follow the link below for Azure Kubernetes Services
    https://docs.microsoft.com/en-gb/azure/aks/tutorial-kubernetes-prepare-app
