import { Component, Input} from '@angular/core';
import { AlumnosUtl } from '../interfaces/utl.interface';
import { UtlService } from '../services/utl.service';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent {

  get alumnos(){
    return this.alumnosutl.alumnos;
  }
  //@Input() alumnosUtl:AlumnosUtl[]=[];//Los datos vienen del componente padre main page ts , alumnos es hijo
  constructor(private alumnosutl:UtlService){}

}


