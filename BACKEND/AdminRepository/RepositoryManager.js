const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const DBManager = require('../Database/connectiondb');
const conf = require('../Database/conf');

//lineas para importar controllers
const UsersControllers = require('../Controllers/UsersControllers');

//lineas para importar routes
const Router = require('../Routes/routes');
const DocumentsControllers = require('../Controllers/DocumentsControllers');

class RepositoryManager{
    #appExpress;
    #runningConfType;
    constructor(){
        
        this.#init();
        Object.preventExtensions(this);
    }

    #init = async () =>{
        this.#runningConfType=conf.DevConfig.service.port;
        this.#appExpress = express();
    }

    #prepareDataBase = async () =>{
        const oDBMan = new DBManager();
        await oDBMan.setupDatabase();
    }
    prepareService = async() =>{
        this.#appExpress.use(bodyParser.json());
        this.#appExpress.use(cors('origin:http://localhost:4200/'));
        this.#appExpress.use(express.static('./Archivos/pdfs'));
        this.#appExpress.use(express.static('./Archivos/images'));
        this.#appExpress.use(bodyParser.urlencoded({
            extended: true
        }));
        this.#appExpress.use(morgan());
        await this.#prepareDataBase(); 
        await this.#prepareRouting (); 
    }
   
    #prepareRouting = async() => {
        const oRouter = new Router();
        const usersControllers = new UsersControllers();
       const documentsControllers = new DocumentsControllers();

        oRouter.attachControllers(usersControllers,documentsControllers);
   
        oRouter.prepareRouting();
        this.#appExpress.use('/api', oRouter.getRouter());
    }
    runService = async () =>{
        const thisServicePort =this.#runningConfType;
        await this.#appExpress.listen(thisServicePort, ()=>{
            console.log(`RepositoryManager is ready on ${thisServicePort}`)
        });
      }
   
}

module.exports = RepositoryManager;