'use strict'
const Documents = require('../Models/Documents');

class DocumentsControllers{
    constructor(){
        Object.preventExtensions(this);
    }
    getAll = async(req, resp) => {
        let data;

        await Documents.fetch((callback)=>{
            data = callback;
            resp.status(200).json(data);
        });
    }
    getArea = async(req, resp) => {
        let data;

        await Documents.fetchArea((callback)=>{
            data = callback;
            resp.status(200).json(data);
        });
    }
    getTipo = async(req, resp) => {
        let data;

        await Documents.fetchTipo((callback)=>{
            data = callback;
            resp.status(200).json(data);
        });
    }
     getOne = async (req, resp) =>{
        let data;
        
        console.log();

       
        let documents = {
            id_documento:req.params.id_documento,
          
        };

        await Documents.fetchOne(documents,(callback)=>{
            data = callback;
            resp.status(200).json(data);
        });
    }

    insert= async (req,resp)=>{
       
        const file= req.files['pdf'][0].filename;
        const image = req.files['img'][0].filename;

        const urlpdf =`http://localhost:5000/${file}`;
        const urlimg =`http://localhost:5000/${image}`;

        console.log(req.body.titulo);

        let{ id_documento, titulo, descripcion, autor, fecha_public, pdf, img, id_area, id_tipo_documento, id_usuario } = req.body;
        let documents = {
            id_documento:"null",
            titulo:titulo,
            descripcion:descripcion,
            autor:autor,
            fecha_public:fecha_public,
            pdf:urlpdf,
            img:urlimg,
            id_area:id_area,
            id_tipo_documento:id_tipo_documento,
            id_usuario:12
        };
       
        let data = await Documents.insert(documents, (callback)=>{
            resp.status(200).json(callback);
        });
        return;
    }

    update = async(req, resp) =>{
        let{ id_documento, titulo, descripcion, autor, fecha_public, pdf, img, id_area, id_tipo_documento, id_usuario } = req.body;
        let documents = {
            id_documento:id_documento,
            titulo:titulo,
            descripcion:descripcion,
            autor:autor,
            fecha_public:fecha_public,
            pdf:pdf,
            img:img,
            id_area:id_area,
            id_tipo_documento:id_tipo_documento,
            id_usuario:"12"
        };
        let data = await Documents.update(documents, (callback)=>{
            resp.status(200).json(callback);
        });
        return;
    }

    delete = async(req, resp) => {
        
        let documents = {
            id_documento: req.params.id_documento
        }
        let data = await Documents.delete(documents, (callback)=>{
            resp.status(200).json(callback);
        });
        return;
    }
}

module.exports = DocumentsControllers;