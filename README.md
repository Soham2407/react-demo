```
docker run --name postgres-db -e POSTGRES_PASSWORD=my-secret --restart always -p 5432:5432 -d postgres
docker run --name pg-admin \
    -e PGADMIN_DEFAULT_EMAIL=abc@xyz.com \
    -e PGADMIN_DEFAULT_PASSWORD=my-secret \
    -p 3333:80 \
    --link postgres-db \
    -d dpage/pgadmin4
```
