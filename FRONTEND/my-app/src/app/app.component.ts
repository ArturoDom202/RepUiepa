import { Component, OnInit } from '@angular/core';
import{UsersService} from'src/app/services/users.service';
import{Users} from 'src/app/models/users';
import {NgForm} from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[UsersService]
})
export class AppComponent implements OnInit {
  title = 'my-app';

  constructor(public usersService:UsersService){
  }
//funcion onInit
  ngOnInit(): void {
     this.getUsers();
  }
  //funcion para obtener datos components
  getUsers(){
    this.usersService.getUsers().subscribe(res=>{
      //console.log(res);
      this.usersService.users=res as Users[];
    }
    )
  }
  deleteUsers(id:string){
    this.usersService.deleteUsers(id)
    .subscribe(res=>{
      console.log(res);
      this.getUsers();
    }
      )
  }
  selectUsers(users:Users){
    this.usersService.selectedUsers=users;
    
      
  }
  addUsers( form:NgForm ){
    console.log(form.value);
    this.usersService.postUsers(form.value).subscribe(res=>{
      console.log(res);
      this.getUsers()
    } )
  }
  updateUsers( form:NgForm){
    console.log(form.value);
    this.usersService.updateUsers(form.value).subscribe(res=>{
      console.log(res);
      this.getUsers()
    } )
  }

}
