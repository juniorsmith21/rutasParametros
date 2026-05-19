import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuarios',
  imports: [],
  templateUrl: './usuarios.html',
  styleUrl: './usuarios.css',
})
export class Usuarios {
id:number=0;
nombre:String="";
apellido:String="";

constructor(private route:ActivatedRoute){
  this.route.params.subscribe((params)=>{
    this.id=Number(params['id'])

    if(this.id==1){
      this.nombre="Smith";
      this.apellido="Ordoñez";
    }
    else if(this.id==2){
      this.nombre="Julieth";
      this.apellido="Lopez";

    }

    else if(this.id==3){
      this.nombre="Paola";
      this.apellido="Muñoz";
    }
    else if(this.id==4){
      this.nombre="Stiven";
      this.apellido="Guayu";

    }
    else{
      this.nombre="Usuario no encontrado";
      this.apellido="";
    }

  })
}




}
