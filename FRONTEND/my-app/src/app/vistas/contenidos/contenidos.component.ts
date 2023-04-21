import { Component, OnInit, HostListener } from '@angular/core';
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
  star: any;
  screenSize: any;
  tamano: any ;
  

  constructor(public contentService:ContentService){
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    result:String;
    let resultado = "";
    this.screenSize = window.innerWidth ;
    if(this.screenSize>800){
    resultado='250px';
    }else{
    resultado='100%';
    }
    this.tamano = resultado;
    return this.tamano;
  }
//funcion onInit
  ngOnInit(): void {
     this.getContent();
     this.onResize();
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
    this.star = result;
    return this.star;
  }
}