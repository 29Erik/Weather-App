import { Component, OnInit} from '@angular/core';
import { City } from '../ciudad.model';
import {DataService} from '../data.service';
import { Dias } from '../dias.model';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css']
})
export class ConsultaComponent implements OnInit {  
  
  ciudad:City[];//Creamos el arreglo vacío que irá almacenando lo que lea del api para el dia actual
  dias:Dias[];//Creamos el arreglo para el arreglo de los días

  constructor(private data:DataService, private dataDos:DataService) { 
  }

  buscarCiudad(citizen){
    console.log('--------ENTRO EN BUSCAR CIUDAD------------');
    //citizen.value='';/**Se le dice que vacie la casilla asignando string vacio */
    citizen.focus();/**Que el cursor se quede en el input text */
    if (!citizen.value) {
      console.log("--NO SIRVE--");
    } else {
      console.log(citizen.value);
    }
    
    this.data.getCiudad(citizen.value).subscribe(data => {/*La flecha recorre el arreglo de datos*/
      this.ciudad=data;/**Guardamos las variables en el arreglo vacio dado que subscribe toma los datos */
     
    });

    this.dataDos.getDias(citizen.value).subscribe(dataDos => {/*La flecha recorre el arreglo de datos*/
      this.dias=dataDos;/**Guardamos las variables en el arreglo vacio dado que subscribe toma los datos  para los dias*/
      console.log('Arreglos dias');
      console.log(this.dias);
    });

    
    return false;/**Al hacerlo false hacemos que no refresque la pág, cancela el evento que trae por defecto angular*/
  }



  ngOnInit() {
    
  }
}
