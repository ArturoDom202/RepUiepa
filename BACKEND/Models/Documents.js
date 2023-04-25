
const Connectiondb = require('../Database/connectiondb');
class Documents{
    //#name = "Users";
    constructor(){
        Object.preventExtensionsthis;
   }
   //fetch, 1er procedimiento es para recuperar datos de la tabla
   fetch = async (callback) => {     
       const connectiondb= new Connectiondb();
            let data = 'SELECT * FROM documentos, area WHERE documentos.id_area = area.id_area ';
            let conn = (await connectiondb.setupDatabase()).conn;
       let sql = conn.query(data, (error, result) => {
            if(error)throw error;
        return callback(result);
       });
    return;
   }
   fetchArea = async (callback) => {     
        const connectiondb= new Connectiondb();
            let data = 'SELECT * FROM area';
            let conn = (await connectiondb.setupDatabase()).conn;
        let sql = conn.query(data, (error, result) => {
            if(error)throw error;
        return callback(result);
        });
    return;
    }
    fetchTipo = async (callback) => {     
        const connectiondb= new Connectiondb();
            let data = 'SELECT * FROM tipo_documento';
            let conn = (await connectiondb.setupDatabase()).conn;
        let sql = conn.query(data, (error, result) => {
            if(error)throw error;
        return callback(result);
        });
    return;
    }
   //fetchOne, 2do procedimiento es para comprobar datos de la tabla
   fetchOne = async(object, callback) => {
        let msg; // linea de mensaje al hacer consulta
        const connectiondb = new Connectiondb();
            let data = 'SELECT * FROM documentos WHERE id_documento = ' + object.id_documento+ '';
            let conn = (await connectiondb.setupDatabase()).conn;
        let sql = conn.query(data, (error, result) =>{
            if(error) throw error;
            if(result==""){
                msg = 'usuario no encontrado';
            }else{
                msg = 'usuario encontrado';
            }
            return callback(result);
        });
        return;
   }

   //sentencia o procedimiento INSERT, para insertar datos de la tabla
   insert = async(object, callback) => {
        const connectiondb = new Connectiondb();
        let sql = 'INSERT INTO documentos SET?';
        let conn = (await connectiondb.setupDatabase()).conn;
        let mes = conn.query(sql, object, (error) =>{
            if (error) throw error;
            let data = object
            return callback(data);
        });
        return ;
   }

   //sentencia o procedimiento UPDATE, para insertar datos de la tabla
   update = async(object, callback) => {
        const connectiondb = new Connectiondb();
        let sql = 'UPDATE documentos SET ? WHERE id_documento =' + object.id_documento + '';
        let conn = (await connectiondb.setupDatabase()).conn;
        let mes = conn.query(sql, object, (error) =>{
            if(error) throw error;
            let data = object;
            return callback(data);
        });
        return;
   }

    //sentencia o procedimiento DELeTE, para eliminar datos de la tabla
   delete = async(object, callback) => {
        const connectiondb = new Connectiondb();
       
        let sql = 'DELETE FROM documentos WHERE id_documento =' + object.id_documento + '';
        let conn = (await connectiondb.setupDatabase()).conn;
        let mes = conn.query(sql, (error) => {
            if(error) throw error;
            let msg = 'Usuario eliminado';
            return callback(msg);
        });
        return;
    }
}
module.exports = Documents = new Documents();
