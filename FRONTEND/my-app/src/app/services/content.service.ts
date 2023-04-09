import { Injectable } from '@angular/core';
import {Content} from '../models/content';
import {HttpClient}from'@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  selectedContent:Content;
  content: Content[] = [];
  readonly URL_API ='http://localhost:5000/api/Content';

constructor(private http:HttpClient) { 
  this.selectedContent=new Content();
}
getContent(){//funcion para obtener datos de la BD
  return this.http.get( this.URL_API);
}


/*
selectDocuments(id:string){//funcion para obtener datos de la BD
  return this.http.get( this.URL_API+`${id}`);
}
*/
}
