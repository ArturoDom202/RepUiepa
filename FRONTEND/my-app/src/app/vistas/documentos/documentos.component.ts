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
  constructor(public documentsService:DocumentsService){
  }
//funcion onInit
  ngOnInit(): void {
     this.getDocuments();
  }
  //funcion para obtener datos components
  getDocuments(){
    this.documentsService.getDocuments().subscribe(res=>{
      //console.log(res);
      this.documentsService.documents=res as Documents[];
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
    console.log(form.value);
    this.documentsService.postDocuments(form.value).subscribe(res=>{
      console.log(res);
      this.getDocuments()
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

