export class Content {
    id_documento:string;
    titulo:string;
    descripcion:string;
    autor:string;
    fecha_public:string;
    pdf:string;
    img:string;
    id_area:string;
    id_tipo_documento:string;
    id_usuario:string;
    calificacion:string;

    
    constructor(id_documento='',titulo='',descripcion='',autor='',fecha_public='',pdf='',img='',id_area='',id_tipo_documento='',id_usuario='',calificacion='',)
    {
            this.id_documento=id_documento;
            this.titulo=titulo;
            this.descripcion=descripcion;
            this.autor=autor;
            this.fecha_public=fecha_public;
            this.pdf=pdf;
            this.img=img;
            this.id_area=id_area;
            this.id_tipo_documento=id_tipo_documento;
            this.id_usuario=id_usuario;
            this.calificacion=calificacion;

    }
}