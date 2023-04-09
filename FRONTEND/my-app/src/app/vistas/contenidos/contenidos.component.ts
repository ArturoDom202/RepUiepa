import { Component, OnInit } from '@angular/core';
import{ContentService} from'src/app/services/content.service';
import{Content} from 'src/app/models/content';

//import {NgForm} from '@angular/forms';


@Component({
  selector: 'app-documents',
  templateUrl: './contenidos.component.html',
  styleUrls: ['./contenidos.component.css']
})
export class ContentComponent implements OnInit {
  title = 'my-content';

  constructor(public contentService:ContentService){
  }
//funcion onInit
  ngOnInit(): void {
     this.getContent();
  }

  //funcion para obtener datos components
  getContent(){
    this.contentService.getContent().subscribe(res=>{
      //console.log(res);
      this.contentService.content=res as Content[];
    }
    )
  }
  writeA(n: number) {
    result:String;
    let result = "";
    for (let i = 0; i < n; i++) {
      result += "<span class='bi-star-fill'></span> ";
    }
    return result;
  }
}