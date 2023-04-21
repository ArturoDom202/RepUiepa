'use strict'
const express = require('express');
const upload = require('../Controllers/upload');


class Router {
    #router;

    #contentController;
    #usersController;
    #documentsController;
    //#homeController
    //#categoryController;

    constructor() {
        this.#router = express.Router();
        Object.preventExtensions(this);
    }
    attachControllers = async(usersController,documentsController,contentController) =>{
        this.#usersController = usersController;
        this.#documentsController = documentsController;
        this.#contentController = contentController;
    }
    
    prepareRouting = async() => {
        this.#router.get('/users' , this.#usersController.getAll);
        this.#router.get('/users:id_usuario' , this.#usersController.getOne);//recibeparametro
        this.#router.post('/users' , this.#usersController.insert);
        this.#router.patch('/users' , this.#usersController.update);
        this.#router.delete('/users:id_usuario' , this.#usersController.delete);
    
        this.#router.get('/documents' , this.#documentsController.getAll);
        this.#router.get('/documents:id_documento' , this.#documentsController.getOne);//recibeparametro
        this.#router.post('/documents',upload.upload,this.#documentsController.insert);
        this.#router.patch('/documents' , this.#documentsController.update);
        this.#router.delete('/documents:id_documento' , this.#documentsController.delete);

        this.#router.get('/content' , this.#contentController.getAll);

        this.#router.get('/documents/area' , this.#documentsController.getArea);
        this.#router.get('/documents/tipo' , this.#documentsController.getTipo);

    }

    getRouter = () => {
        return this.#router;
    }
}
module.exports = Router;