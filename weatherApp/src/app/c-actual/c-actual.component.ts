import { Component, OnInit, Input } from '@angular/core';
import { City } from '../ciudad.model';

@Component({
  selector: 'app-c-actual',
  templateUrl: './c-actual.component.html',
  styleUrls: ['./c-actual.component.css']
})
export class CActualComponent implements OnInit {  
  @Input() miCiudad:City[];
  @Input() habilitar:boolean;
  constructor() { 
    console.log("Variable en componente siguiente: ");
    console.log(this.miCiudad);
  }

 //Llama a la funcion de habilitar el comonente cuando cumple la validación del dato
 onEnableComponent() {
  this.habilitar = false;
}

//Llama a la funcion de deshabilitar el comonente cuando cumple la validación del dato
onDisableComponent() {
  this.habilitar = true;
}

  ngOnInit() {
  }

}
