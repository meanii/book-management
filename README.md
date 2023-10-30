# book-management 🦉
> book management api, using express and mongodb

# Table of contents
- [How to run](#how-to-run)
    - [How to run legacy way](#how-to-run-legacy-way)
    - [How to run using docker compose](#how-to-run-using-docker-compose)
- [API Documentation](#api-documentation)

Deployed on Digital Ocean Server: https://book-management.meanii.dev/books

# How to run

There are two ways to run this project
1. [legacy way](#how-to-run-legacy-way)
2. [using docker compose](#how-to-run-using-docker-compose)

### How to run legacy way
You need to have nodejs and mongodb installed on your machine

1. Clone this repository
```bash
git clone https://github.com/meanii/book-management
```
2. Install dependencies
```bash
npm install
```

3. Run server
```bash
npm start
```

### How to run using docker compose
You need to have docker and docker-compose installed on your machine

1. Install docker and docker-compose
```bash
curl -o- https://get.docker.com | sh -x 
```

2. Clone this repository
```bash
git clone https://github.com/meanii/book-management
```

3. Run docker-compose
```bash
docker compose up
```

# API Documentation

## Books

### Get all books
default limit is 10, you can change it by adding `limit` query parameter
```http
GET /books
```

```http
GET /books?limit=20&page=2
```


### Get book by id
```http
GET /books/:id
```

### Create new book
```http
POST /books
```
```json
{
    "title": "string",
    "author": "string",
    "summary": "string"
}
```

### Update book
```http
PUT /books/:id
```
```json
{
    "title": "string",
    "author": "string",
    "summary": "string"
}
```

### Delete book
```http
DELETE /books/:id
```

# License
[The Unlicense](https://github.com/meanii/book-management/blob/main/LICENSE)