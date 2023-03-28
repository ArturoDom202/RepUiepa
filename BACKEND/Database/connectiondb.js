'use strict'
const mysql = require('mysql');
const conf = require('./conf');

class DBManager {
  #dbConfig;
  #conn;

  constructor() {
      Object.preventExtensions(this);
  }
  setupDatabase = async () => {  //funcion para hacer coneccion a la BD
        let conn = new mysql.createConnection(conf.DevConfig.db);
        conn.connect(
        function (err) {  // funcion condicional, existe o no la conexion 
            if (err) { 
                console.log("!!! Cannot connect !!! Error:");
                throw err; //dice donde esta el error(si es que la hay)
            }
            else
            {
                console.log("Connection established, Welcome to the System chilango.");  //lineas para imprimir mensajes 
        
        
            }
        });

        return  {conn};
    }

}

module.exports= DBManager;
