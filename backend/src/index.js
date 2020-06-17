/**
 * Rota / Recurso
 */

/**Métodos HTTP:
 * 
 *GET: Busca/listar uma informação do back-end
 *POST: Criar uma informação no back-end
 *PUT: Alterar uma informação no back-end
 *DELETE: Deletar uma informação no back-end
 */

/**
 * Tipos de parâmetros:
 * 
 * Query Params: Parâmetros nomeados enviados na rota após "?" (Filtros, paginação)
 * Route Params: Parâmetros utilizados para identificar recursos
 * Request Body: Corpo da requisição, utilizados para criar ou alterar recursos 
 */

/**
 * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
 * NoSQL: MongoDB, CouchDB, etc
 */

/**
 * Driver: SELECT * FROM users
 * Query Builder: table('users').select('*').where()
 */


const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

/** 
 * Caso fosse colocar o app em produção, segue o cors:
 * app.use(cors({
 *  origin: 'http://meuapp.com'
 * }));
 */
app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);