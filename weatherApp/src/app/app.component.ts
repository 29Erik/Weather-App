import { Component, OnInit } from '@angular/core';
import { City } from './ciudad.model'
import {DataService} from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'weatherApp';
  ciudad:City[];//Creamos el arreglo vacío que irá almacenando lo que lea del api
  constructor(private data:DataService){
    this.data.getCiudad().subscribe(data => {/*La flecha recorre el arreglo de datos*/
      this.ciudad=data;/**Guardamos las variables en el arreglo vacio dado que subscribe toma los datos */
    });
  }
}
