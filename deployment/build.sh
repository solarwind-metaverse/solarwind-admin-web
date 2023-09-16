#!/bin/bash

# Login to ECR account if not already logged in
# aws ecr get-login-password --region eu-north-1 | docker login --username AWS --password-stdin 063525084510.dkr.ecr.eu-north-1.amazonaws.com
aws ecr-public get-login-password --region us-east-1 | docker login --username AWS --password-stdin public.ecr.aws/z5f5d1o3

# docker rmi --force 063525084510.dkr.ecr.eu-north-1.amazonaws.com/slw-admin-web
docker rmi --force public.ecr.aws/z5f5d1o3/solarwind-admin-web
docker rmi --force solarwind/admin-web

docker buildx build --platform=linux/arm64 -t solarwind/admin-web ../

# docker tag solarwind/admin-web 063525084510.dkr.ecr.eu-north-1.amazonaws.com/slw-admin-web
docker tag solarwind/admin-web public.ecr.aws/z5f5d1o3/solarwind-admin-web

# aws ecr batch-delete-image --repository-name slw-admin-web --image-ids imageTag=latest
# docker push 063525084510.dkr.ecr.eu-north-1.amazonaws.com/slw-admin-web
docker push public.ecr.aws/z5f5d1o3/solarwind-admin-web