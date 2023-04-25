export class Users {
    id_usuario:string;
    nombre:string;
    apellido_p:string;
    apellido_m:string;
    email:string;
    password:string;
    id_tipo_usuario:string;
    descripcion:string;
    
    constructor(id_usuario='',nombre='',Apellido_paterno='',Apellido_materno='',correo='',password='',Tipo_usuario='',descripcion='')
    {
            this.id_usuario=id_usuario;
            this.nombre=nombre;
            this.apellido_p=Apellido_paterno;
            this.apellido_m=Apellido_materno;
            this.email=correo;
            this.password=password;
            this.id_tipo_usuario=Tipo_usuario;
            this.descripcion=descripcion;
    }
}