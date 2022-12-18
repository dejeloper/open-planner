# Next.js Open Planner

_Para correr localmente_

### Crear contenedor de base de datos:

```
docker-compose up -d
```

- El -d, significa **detached**

Mongo DB URL Local:

```
mongodb://localhost:27017/entriesdb
```

### Configurar las variables de entorno

Renombrar el archivo **.env.template** a **.env**

### Llenar la base de datos con información de pruebas

Llamar por (GET):

```
http://localhost:3000/api/seed
```
