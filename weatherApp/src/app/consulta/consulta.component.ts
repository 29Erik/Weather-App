import { Component, OnInit} from '@angular/core';
import { City } from '../ciudad.model';
import {DataService} from '../data.service';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css']
})
export class ConsultaComponent implements OnInit {  
  
  ciudad:City[];//Creamos el arreglo vacío que irá almacenando lo que lea del api

  buscarCiudad(city){
    this.ciudad.push(city.value);
    city.value='';/**Se le dice que vacie la casilla asignando string vacio */
    city.focus();/**Que el cursor se quede en el input text */
    return false;/**Al hacerlo false hacemos que no refresque la pág, cancela el evento que trae por defecto angular*/
  }

  constructor(private data:DataService) { 
  }

  ngOnInit() {
    return this.data.getCiudad().subscribe(data => {/*La flecha recorre el arreglo de datos*/
      this.ciudad=data;/**Guardamos las variables en el arreglo vacio dado que subscribe toma los datos */
    });
  }
}
