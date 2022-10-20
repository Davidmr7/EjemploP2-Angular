import { Component } from "@angular/core";
import { AlumnosUtl } from "../interfaces/utl.interface";
import { UtlService } from "../services/utl.service";
import { UtlModule } from "../utl.module";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent{


/*   alumnosUtl:AlumnosUtl[]=[
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
  ] */

  constructor(){}

  regAlum:AlumnosUtl={
    nombre:"",
    edad:0
    }




// input y output 
/* agregarNuevoAlumno(argumento:AlumnosUtl){//Argumento es una variable 
  this.alumnosUtl.push(argumento);
  this.UtlService.muestra();
} */
  



}
