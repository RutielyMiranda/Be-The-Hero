/**Rota/recurso */

/** Métodos HTTP: 
 * Get: Buscar/listar uma informação do back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
 */

/**
 * Tipos de parâmentros:
 * Query Params: Parâmetros nomeados enviados na rota após "?"(Filtros, paginação)
 * Route Params: Parâmetros utilizados para identificar recursos
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
 * Request: Guardar os dados atraves da requisição dos usuarios
 * Response: Responsavel por retornar uma resposta pro usuario
 */

 /**
  * Banco de Dados
  * SQL: MySql, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
  * NoSQL: MongoDB, CouchDB, etc. 
  */

  /**
   * Driver: SELECT * FROM users
   * Query Builder: talbe('users').select('*').where()
   */

const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);


/**app.get('/users', (request, response) =>{
    return response.send('Hello, World!')
}); */

app.listen(3333); 

