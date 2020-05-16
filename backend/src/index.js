const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);


app.listen (3333);
/**
 * Métodos HTTP:
 * 
 * GET: Buscar/Listar uma informação do back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
 */

 /**
  * Tipos de Parâmetros:
  * 
  * Query Params: Parâmetros nomeados enviados na rota após  "?" (Filtros, Paginação)
  * Route Params: Parâmetros utilizados para identificar recursos
  * Request Body:
  * 
  */

  /**
   * Bancos de dados: SQL, MySQL, SQLite....
   * NoSQL: MongoDB, CouchDB, etc
   * 
   */

   /**
    * Driver: SELECT* FROM users
    * Query Builder: table('users').select('*').where()
    */
   


