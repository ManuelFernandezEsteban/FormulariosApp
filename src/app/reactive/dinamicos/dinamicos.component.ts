import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent implements OnInit {

  miFormulario:FormGroup=this.fb.group({
    nombre:['Manuel',[Validators.required,Validators.minLength(3)]],
    favoritos:this.fb.array([
      ['Total War: Rome II',Validators.required],
      ['Civilization VI',Validators.required]
    ],Validators.required)
  });

  nuevoFavorito:FormControl=this.fb.control('',Validators.required);

  get favoritosArr(){
    return this.miFormulario.get('favoritos') as FormArray;
  }
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
  }

  campoEsValido(campo:string){
    return this.miFormulario.controls[campo].errors 
    && this.miFormulario.controls[campo].touched;
  }

  agregarFavorito(){
    if (this.nuevoFavorito.invalid) {
      return;
    }
    this.favoritosArr.push( this.fb.control(this.nuevoFavorito.value,Validators.required ) );
    this.nuevoFavorito.reset();
  }

  borrar(indice:number){
    this.favoritosArr.removeAt(indice);
  }

  guardar(){
    if(this.miFormulario.valid){
      console.log(this.miFormulario.value);
      this.miFormulario.reset();
    }else{
      this.miFormulario.markAllAsTouched();
    }
  }
}
