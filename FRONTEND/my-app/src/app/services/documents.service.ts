import { Injectable } from '@angular/core';
import {Documents} from '../models/documents';
import {HttpClient}from'@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DocumentsService {

  selectedDocuments:Documents;
  documents: Documents[] = [];
  readonly URL_API ='http://localhost:5000/api/Documents';

constructor(private http:HttpClient) { 
  this.selectedDocuments=new Documents();
}
getDocuments(){//funcion para obtener datos de la BD

  return this.http.get( this.URL_API);
}
postDocuments(documents:FormData){//funcion para obtener datos de la BD
  
  return this.http.post( this.URL_API,documents);
}

updateDocuments(Documents:Documents){//funcion para obtener datos de la BD
  return this.http.patch( this.URL_API,Documents);
}
deleteDocuments(id:string){//funcion para obtener datos de la BD
  return this.http.delete( this.URL_API+`${id}`);
}
selectDocuments(id:string){//funcion para obtener datos de la BD
  return this.http.get( this.URL_API+`${id}`);
}


}
