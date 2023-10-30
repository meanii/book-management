# book-management 🦉
> book management api, using express and mongodb

# Table of contents
- [How to run](#how-to-run)
    - [How to run legacy way](#how-to-run-legacy-way)
    - [How to run using docker compose](#how-to-run-using-docker-compose)
- [API Documentation](#api-documentation)
- [How to Deploy on Server](#how-to-deploy-on-server)

Deployed on Digital Ocean Server: https://book-management.meanii.dev/books

Demo Video: https://www.youtube.com/watch?v=IKx0A9xu6TE

# How to run

There are two ways to run this project
1. [legacy way](#how-to-run-legacy-way)
2. [using docker compose](#how-to-run-using-docker-compose) (recommended)

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

# How to Deploy on Server

pre-requisite:
- VPS Server (Digital Ocean, AWS, etc)
- OS: Ubuntu 20.04 LTS (recommended)
- Domain Name (optional)
- Docker and Docker Compose installed on your server
- Git installed on your server
- Nginx installed on your server
- SSL Certificate (optional)

You need to have docker and docker-compose installed on your server
1. Install docker and docker-compose
```bash
curl -o- https://get.docker.com | sh -x 
```

2. Clone this repository
```bash
git clone https://github.com/meanii/book-management && cd book-management
```

3. Run docker-compose
```bash
docker compose up -d
```

useful docker and docker compose commands:
```bash
docker ps # show running containers
docker ps -a # show all containers
docker compose ps # show running containers using docker compose
docker compose logs --follow --tail 100 # show logs of all containers using docker compose
docker logs <container-id> # show logs of a container
docker exec -it <container-id> bash # enter a container
```

4. Install Nginx
```bash
sudo apt update
sudo apt install nginx
```

5. Configure Nginx
use [nginx.conf](./nginx.conf) as a template
```bash
sudo vim /etc/nginx/sites-available/book-management.conf
```

6. Enable Nginx config
```bash
sudo ln -s /etc/nginx/sites-available/book-management.conf /etc/nginx/sites-enabled/
```

7. Restart Nginx
```bash
sudo systemctl restart nginx
```

8. Install SSL Certificate (optional)
```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d example.com -d www.example.com
```

# License
[The Unlicense](https://github.com/meanii/book-management/blob/main/LICENSE)