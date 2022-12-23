# Next.js Open Planner

_Para correr localmente_

- ### Crear contenedor de base de datos:

```
docker-compose up -d
```

- El -d, significa **detached**

Mongo DB URL Local:

```
mongodb://localhost:27017/entriesdb
```

- ### Reconstruir los módulos de node

  `npm install`

- ### Configurar las variables de entorno

  Renombrar el archivo `.env.template` a `.env`

- ### Levantar aplicación de Next

  `npm run dev`

- ### Llenar la base de datos con información de pruebas

Llamar por (GET):

```
http://localhost:3000/api/seed
```
