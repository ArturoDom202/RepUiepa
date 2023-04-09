
const Connectiondb = require('../Database/connectiondb');
class Content{

    constructor(){
        Object.preventExtensionsthis;
   }
   //fetch, 1er procedimiento es para recuperar datos de la tabla
   fetch = async (callback) => {     
       const connectiondb= new Connectiondb();
            let data = 'SELECT * FROM documentos';
            let conn = (await connectiondb.setupDatabase()).conn;
       let sql = conn.query(data, (error, result) => {
            if(error)throw error;
        return callback(result);
       });
    return;
   }
   /*//fetchOne, 2do procedimiento es para comprobar datos de la tabla
   fetchOne = async(object, callback) => {
        let msg; // linea de mensaje al hacer consulta
        const connectiondb = new Connectiondb();
            let data = 'SELECT * FROM documentos WHERE id_documento = ' + object.id_documento+ '';
            let conn = (await connectiondb.setupDatabase()).conn;
        let sql = conn.query(data, (error, result) =>{
            if(error) throw error;
            if(result==""){
                msg = 'documento no encontrado';
            }else{
                msg = 'documento encontrado';
            }
            return callback(result);
        });
        return;
   }*/
}
module.exports = Content = new Content();
