import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{RouterModule}from '@angular/router'
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { DocumentsComponent } from './vistas/documentos/documentos.component';
import { UsuariosComponent } from './vistas/usuarios/usuarios.component';
import { ContentComponent } from './vistas/contenidos/contenidos.component';

@NgModule({
  declarations: [
    AppComponent,
    UsuariosComponent,
    DocumentsComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {path:'usuarios',component:UsuariosComponent},
      {path:'contenidos',component:ContentComponent},
       {path :'documentos',component:DocumentsComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
