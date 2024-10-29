## Fullstack Serverless Starter with Hono.js, Cloudflare Workers and Neon Postgres.

This is a starter project for a fullstack serverless application using Hono.js, Cloudflare Workers, and Neon Postgres. It is a simple CRUD application that allows you to create, read, update, and delete posts. It also has provisions for building user interfaces using HTML and CSS.

### Prerequisites

- Node.js and npm installed
- [Cloudflare Workers](https://workers.cloudflare.com/) account
- [Neon Postgres](https://neon.tech) account and database

### Project structure

The project structure is as follows:

```
---docs
    |-- schemas.ts
---prisma
    |-- schema.prisma
---public
    |-- images.*png,jpg,svg
    |-- favicon.ico
---src
    |-- configs
    |-- controllers
    |-- middlewares
    |-- routes
    |-- validations
    |-- views
    |-- index.ts
---utils
    |-- constants.js
---tsconfig.json
---wrangler.toml
---package.json
---package-lock.json
---README.md
```
