# Computer pieces CRUD Repository on Postgres

## Steps to Use

You need to set the .env variables
```
POSTGRES_HOST=youthost
POSTGRES_USER=youruser
POSTGRES_PASSWORD=magical_password
POSTGRES_DB=yourdatabase
POSTGRES_PORT=yourport
POSTGRES_SYNC=true
JWT_SECRET_KEY=anykey

```

```bash
$ npm install
```

## After set the enviroment variables execute the following command to generate a user to authenticate on JWT
```
npm run migration:up
```
## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

```

# Bearer Login
```
{
	"email": "admin@admin.com",
	"password": "password"
}
```

# Swagger Link
 *http://localhost:3000/api*
 
## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
