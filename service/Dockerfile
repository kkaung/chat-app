FROM golang:1.20rc1-alpine3.17

WORKDIR /app
COPY go.mod go.sum ./
COPY . .

EXPOSE 3001
CMD [ "go", "run" , "."]

