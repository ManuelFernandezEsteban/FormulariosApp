import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  @ViewChild('miFormulario') miFormulario!:NgForm;

  initForm={
    producto:'',
    precio:0,
    existencias:0
  }

  constructor() { }

  ngOnInit(): void {
  }
  precioValido():boolean{
    return this.miFormulario?.controls.precio?.invalid && 
           this.miFormulario?.controls.precio?.touched;
  }

  nombreValido():boolean{
    return this.miFormulario?.controls.producto?.invalid && 
           this.miFormulario?.controls.producto?.touched;
  }

  guardar(){
    console.log('Posteo corecto',this.miFormulario.value);
    this.miFormulario.resetForm(
      {
        precio:0,
        existencias:0
      }
    );
  }


}
