import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { ValidatorService } from '../../../shared/validator/validator.service';
import { EmailValidatorService } from '../../../shared/validator/email-validator.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: [
  ]
})
export class RegistroComponent implements OnInit { 

  miFormulario : FormGroup = this.fb.group({
    nombre:['',[Validators.required, Validators.pattern(this.vs.nombreApellidoPattern)]],
    email:['',[Validators.required,Validators.pattern(this.vs.emailPattern)],[this.ev]],
    username:['',[Validators.required,this.vs.noPuedeSerExistente]],
    password:['',[Validators.required,Validators.minLength(6)]],
    password2:['',[Validators.required]]
  },{
    validators:[
      this.vs.camposIguales('password','password2')
    ]
  })



  get errorEmailMsg():string{
    const errors=this.miFormulario.get('email')?.errors;
    if(errors?.required){
      return "El email es obligatorio";
    }else if (errors?.pattern){
      return "El formato no es válido"
    }else if (errors?.emailTomado){
      return "El email ya está asignado"
    }else {
      return '';
    }

  }

  constructor(private fb:FormBuilder,
              private vs:ValidatorService,
              private ev:EmailValidatorService) { }

  ngOnInit(): void {
    this.miFormulario.reset({
      nombre:'Manuel Fernandez',
      email:'test1@test.com',
      username:'Manuelo1977',
      password:'1231456',
      password2:'1231456'
    })
  }

  campoNoValido(campo:string){
    return this.miFormulario.get(campo)?.invalid &&
           this.miFormulario.get(campo)?.touched
  }

  enviarFormulario(){
    console.log(this.miFormulario.value);
    this.miFormulario.markAllAsTouched();
  }



}
