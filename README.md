<h1 align="center">
Node.js + MySQL + Express + Sequelize + Handlebars + body-parser
</h1>

<p> Victor Lima - Guia do Programador / Tutorial </p>
<p> Playlist: https://www.youtube.com/watch?v=LLqq6FemMNQ&list=PLJ_KhUnlXUPtbtLwaxxUxHqvcNQndmI4B</p>

## Node.js
- "Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine."
- https://nodejs.org/en/

- I installed Node.js using Ubuntu 20.04.3 LTS operating system following the link below:
- https://github.com/nodesource/distributions/blob/master/README.md

- And I use the npm like package manager. You can install following the insctructions in the link below:
- https://www.npmjs.com/package/npm

- For the automatically execution of the server, I install the Nodemon and configure your parameters in package.json.
- https://www.npmjs.com/package/nodemon

- For init the application, you need can use one of the next comands:
```nodemon index.js```
```node index.js```

## MySQL

- If you need install the MySQL in your Ubuntu machine, you can see this tutorial: https://www.digitalocean.com/community/tutorials/how-to-install-mysql-on-ubuntu-20-04-pt
- You can follow the next link to make a configuration between the Node.js and the MySQL: https://www.youtube.com/watch?v=NkJwjy3LOd4)
(https://www.webmundi.com/banco-de-dados/mysql/como-instalar-mysql-mysql-workbench-no-linux/
- For init the database, you can use the next comand: 
```mysql -h localhost -u root -p```


## Express
- "Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications."
- https://expressjs.com/

- When you open this project, you need to install the Express, then creating it the node_modules folder.

## Sequelize
- "Sequelize is a promise-based Node.js ORM tool for Postgres, MySQL, MariaDB, SQLite, DB2 and Microsoft SQL Server. It features solid transaction support, relations, eager and lazy loading, read replication and more."
- https://www.npmjs.com/package/sequelize
- For install the Sequelize in the project folder, you need to execute the nexts comands: ```npm install --save sequelize``` ```npm install --save mysql2```

## Handlebars
- "Handlebars is a simple templating language. It uses a template and an input object to generate HTML or other text formats. Handlebars templates look like regular text with embedded Handlebars expressions."
- https://handlebarsjs.com/
- I used the comand ```npm install --save express-handlebars``` for the installation of the Handlebars.

## body-parser
- "Node.js body parsing middleware."
- https://www.npmjs.com/package/body-parser
- You can install the body-parser with the next comand: ```npm install --save body-parser```
