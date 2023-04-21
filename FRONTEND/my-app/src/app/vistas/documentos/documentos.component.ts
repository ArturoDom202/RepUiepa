import { Component, OnInit } from '@angular/core';
import{DocumentsService} from'src/app/services/documents.service';
import{Documents} from 'src/app/models/documents';
import {NgForm} from '@angular/forms';


@Component({
  selector: 'app-documents',
  templateUrl: './documentos.component.html',
  styleUrls: ['./documentos.component.css']
})
export class DocumentsComponent implements OnInit {
  title = 'my-documents';

  private fileTmp:any;
  private imgTmp:any;

  constructor(public documentsService:DocumentsService){
  }
//funcion onInit
  ngOnInit(): void {
     this.getDocuments();
     this.getArea();
     this.getTipo();

  }
  getFile($event:any):void{
    const [file] = $event.target.files;
    this.fileTmp ={
      fileRaw:file,
      fileName:file.name
    }
  }
  getIMG($event:any):void{
    const [file] = $event.target.files;
    this.imgTmp ={
      imgRaw:file,
      imgName:file.name
    }
  }

  //funcion para obtener datos components
  getDocuments(){
    this.documentsService.getDocuments().subscribe(res=>{
      //console.log(res);
      this.documentsService.documents=res as Documents[];
    }
    )
  }
  getArea(){
    this.documentsService.getArea().subscribe(res=>{
      //console.log(res);
      this.documentsService.area=res as Documents[];
    }
    )
  }
  getTipo(){
    this.documentsService.getTipo().subscribe(res=>{
      //console.log(res);
      this.documentsService.tipo=res as Documents[];
    }
    )
  }
  deleteDocuments(id:string){
    this.documentsService.deleteDocuments(id)
    .subscribe(res=>{
      console.log(res);
      this.getDocuments();
    }
      )
  }
  selectedDocuments(documents:Documents){
    this.documentsService.selectedDocuments=documents;
    
      
  }
 

  addDocuments( form:NgForm ){
   
    if(form.invalid){
      return;
        }
        const body = new FormData();

        body.append('titulo',this.documentsService.selectedDocuments.titulo);
        body.append('descripcion',this.documentsService.selectedDocuments.descripcion);
        body.append('autor',this.documentsService.selectedDocuments.autor);
        body.append('fecha_public',this.documentsService.selectedDocuments.fecha_public);
        body.append('pdf',this.fileTmp.fileRaw,this.fileTmp.fileName);
        body.append('img',this.imgTmp.imgRaw,this.imgTmp.imgName);
        body.append('id_area',this.documentsService.selectedDocuments.id_area);
        body.append('id_tipo_documento',this.documentsService.selectedDocuments.id_tipo_documento);
        
  
    this.documentsService.postDocuments(body)
    .subscribe(res=>{
      console.log(res);
      this.getDocuments();
    } )
  }
  updateDocuments( form:NgForm){
    console.log(form.value);
    this.documentsService.updateDocuments(form.value).subscribe(res=>{
      console.log(res);
      this.getDocuments()
    } )
  }

}

