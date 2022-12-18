FROM golang:1.20rc1-alpine3.17

WORKDIR /app
COPY go.mod go.sum ./
RUN go mod download

RUN go install github.com/cosmtrek/air@latest


COPY . .

EXPOSE 3001

ENTRYPOINT [ "air" ]
