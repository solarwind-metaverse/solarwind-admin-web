# Use an official Node.js runtime as the base image
FROM node:20
WORKDIR /app

COPY . .

RUN npm install
RUN npm install -g @angular/cli
RUN ng build

EXPOSE 80

CMD ["ng", "serve", "--host", "0.0.0.0", "--port", "80"]



