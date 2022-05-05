import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface Usuario {
  nombre: string;
  correo: string;
  password: string;
}


@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.scss']
})
export class AgregarComponent implements OnInit {

  formularioCreado!: FormGroup;
  usuarios: Array<Usuario> = new Array<Usuario>(); 
  esNuevo: boolean=true;
  posicionEditar: Number= -2;


  constructor(private formBuilder: FormBuilder) { }


  ngOnInit(): void {
    this.crearFormulario();
  }


  crearFormulario(){
    this.formularioCreado = this.formBuilder.group({
      nombre: ['carmen', Validators.required],
      correo: ['', Validators.compose([
        Validators.required, Validators.email
      ])],
      password: ['', Validators.compose([
        Validators.required, Validators.minLength(8)
      ])]

    })
  }


  agregar (){
    this.usuarios.push(this.formularioCreado.value as Usuario);
    this.formularioCreado.reset();
    for(let index: number = 0; index < 3; index++)
    {

    }
    let nombres = ["Juan","Maria","Pedro"]

  }

  editar(){
    console.log(this.usuarios)
    

     this.usuarios[this.posicionEditar].nombre  = this.formularioCreado.value.nombre;
    //  this.usuarios[this.posicionesEditar].correo = this.formularioCreado.value.correo;
    //  this.usuarios[this.posicionEditar].password = this.formularioCreado.value.password;
     this.formularioCreado.reset();
     this.esNuevo = true;
     this.posicionEditar = -1;
  }

  editarUsuario(posiciones: number)
  {

    this.formularioCreado.setValue({
      nombre: this.usuarios[posiciones].nombre,
      correo: this.usuarios[posiciones].correo,
      password: this.usuarios[posiciones].password,
    })

    this.posicionEditar = posiciones;
    this.esNuevo = false;

  }
}
