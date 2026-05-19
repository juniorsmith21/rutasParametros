import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

  @Component({
    selector: 'app-lista-usu',
    standalone:true,
    imports: [CommonModule,RouterModule],
    templateUrl: './lista-usu.html',
    styleUrl: './lista-usu.css',
  })
  export class ListaUsu {

    usuarios = [
       { id:1,nombre:'Smith', apellido:"Ordoñez"},
        {  id:2,nombre:'Julieth',apellido:"Lopez" },
        { id:3,nombre:'Paola', apellido:"Muñoz" },
        { id:4,nombre:'Stiven', apellido:"Guayu" }
    ]
  }
