import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css']
})
export class ConsultaComponent implements OnInit {
  buscarCiudad(city){
    city.value='';/**Se le dice que vacie la casilla asignando string vacio */
    city.focus();/**Que el cursor se quede en el input text */
    return false;/**Al hacero false hacemos que no refresque la pág, cancela el evento que trae por defecto angular*/
  }
  constructor() { }

  ngOnInit() {
  }

}
