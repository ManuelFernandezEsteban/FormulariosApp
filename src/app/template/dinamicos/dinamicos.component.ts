import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

interface Persona{
  nombre:string;
  favoritos:Favorito[];
}
interface Favorito{
  id:number;
  nombre:string;
}


@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
    
  ]
})
export class DinamicosComponent implements OnInit {

  nuevoJuego:string='';

  persona:Persona={
    nombre:'Manuel',
    favoritos: [
      {
        id:1,
        nombre:'Total War'
      },
      {
        id:2,
        nombre:'Diablo II'
      }
    ]
  }

  @ViewChild('miFormulario') miFormulario!:NgForm;
  
  constructor() { }

  ngOnInit(): void {
  }

  agregarJuego(){
    const nuevoFavorito:Favorito={
      id:this.persona.favoritos.length+1,
      nombre:this.nuevoJuego
    };
    this.persona.favoritos.push({...nuevoFavorito});
    this.nuevoJuego='';
  }

  guardar(){
    console.log('Formulario posteado');
  }
  eliminar(indice:number){
    this.persona.favoritos.splice(indice,1);
  }


}
