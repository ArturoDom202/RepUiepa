'use strict'
const Content = require('../Models/Content');

class ContentControllers{
    constructor(){
        Object.preventExtensions(this);
    }
    getAll = async(req, resp) => {
        let data;

        await Content.fetch((callback)=>{
            data = callback;
            resp.status(200).json(data);
        });
    }
    /*
     getOne = async (req, resp) =>{
        let data;
        
        console.log();

       
        let Content = {
            id_usuario:req.params.id_usuario,
          
        };

        await Content.fetchOne(content,(callback)=>{
            data = callback;
            resp.status(200).json(data);
        });
    }*/
}

module.exports = ContentControllers;