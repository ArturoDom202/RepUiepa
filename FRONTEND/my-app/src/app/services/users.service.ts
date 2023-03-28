import { Injectable } from '@angular/core';
import {Users} from '../models/users';
import {HttpClient}from'@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
    selectedUsers:Users;
    users: Users[] = [];
    readonly URL_API ='http://localhost:5000/api/Users';

  constructor(private http:HttpClient) { 
    this.selectedUsers=new Users();
  }
  getUsers(){//funcion para obtener datos de la BD

    return this.http.get( this.URL_API);
  }
  postUsers(Users:Users){//funcion para obtener datos de la BD
    return this.http.post( this.URL_API,Users);
  }
  updateUsers(Users:Users){//funcion para obtener datos de la BD
    return this.http.patch( this.URL_API,Users);
  }
  deleteUsers(id:string){//funcion para obtener datos de la BD
    return this.http.delete( this.URL_API+`${id}`);
  }
  selectUsers(id:string){//funcion para obtener datos de la BD
    return this.http.get( this.URL_API+`${id}`);
  }


}
