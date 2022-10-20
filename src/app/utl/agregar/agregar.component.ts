import { Component, EventEmitter, Input, Output} from '@angular/core';
import { AlumnosUtl } from '../interfaces/utl.interface';
import { UtlService } from '../services/utl.service';


@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent {

  //@Input() alumnosUtl:AlumnosUtl[]=[];
  @Input() regAlum:AlumnosUtl={
    nombre:"",
    edad:0
    };

    constructor(private utlservice:UtlService){}

    

    //@Output() onNuevoAlumno: EventEmitter<AlumnosUtl>= new EventEmitter();

    agregar():void{
      console.log(this.regAlum);
      //this.alumnosUtl.push(this.regAlum);
      //this.onNuevoAlumno.emit(this.regAlum);
      this.utlservice.agregarNuevoAlumno(this.regAlum);

      this.regAlum={
        nombre:"",
        edad:0 //esto es para queb el arreglo se resete y se dervincule del dato 
      }
    } 

}
