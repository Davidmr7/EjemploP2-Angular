import { Injectable } from '@angular/core';
import { AlumnosUtl } from '../interfaces/utl.interface';

@Injectable({
  providedIn: 'root'
})
export class UtlService {

  private _alumnosUtl:AlumnosUtl[]=[
    {
      nombre:"Mario",
      edad:22
    },
    {
      nombre:"Veronica",
      edad:25
    },
    {
      nombre:"Luisa",
      edad:22
    }
  ]

  get alumnos():AlumnosUtl[]{
    return [...this._alumnosUtl]//se crea una especia de vinculacion una separacion de los elementos del arreglo
  }                             //tres puntos corchete

  constructor() { }

  agregarNuevoAlumno(argumento:AlumnosUtl){//Argumento es una variable 
    this._alumnosUtl.push(argumento);
  }

  muestra(){
    console.log("Hola");
  }

}



