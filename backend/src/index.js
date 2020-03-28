const express =  require("express");
const cors = require("cors");
const routes = require('./routes');

const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);


app.listen(3333);













/* 
    Pra abrir no cmd -> code .
    recurso e rotas -> recurso é o que vem depois da barra, rotas é o conjunto

    ** Métodos HTPP : **
    GET: Buscar/listar uma informação do back-end
    POST: Criar uma informação no back-end
    PUT: Alterar uma informação no back-end
    DELETE: Deletar uma informação no back-end


    ** INSOMNIA ** 

    O navegador reconhece apenas o método GET, para utilizar esses outros métodos nas nossas rotas, vamos usar o software INSOMNIA

    Query Params: Parâmetros nomeados/enviados na rota após "?" (filtros, paginação)
    Route Params: Parâmetros utilizados para identificar recursos
    Request Bory: Corpo da requisição, utilizado para criar ou alterar recursos




    ***Temos que identificar funcionalidades e entidades na nossa aplicação***

    Entidades: ONG e CASOS
    Funcionalidades: Login de ong, cadastro de ong, logout de ong,
        cadastrar novos casos, deletar casos, listar casos específicos de uma ong,
        listar todos os casos, entrar em contato com a ong
*/