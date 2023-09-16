#!/bin/bash

sudo amazon-linux-extras install docker -y
sudo systemctl start docker
sudo systemctl enable docker
sudo usermod -aG docker ec2-user

# Pull and run Docker image
docker pull public.ecr.aws/z5f5d1o3/solarwind-admin-web
docker run -d -p 80:80 --name slw-admin-web public.ecr.aws/z5f5d1o3/solarwind-admin-web
