import { Component, OnInit, Input } from '@angular/core';
import { Dias } from '../dias.model';

@Component({
  selector: 'app-c-siguiente',
  templateUrl: './c-siguiente.component.html',
  styleUrls: ['./c-siguiente.component.css']
})
export class CSiguienteComponent implements OnInit {
  @Input() misDias:Dias[];//Arreglo que va a recibir un api de tipo dias que viene del componente de consulta
  constructor() { }

  ngOnInit() {
  }

}
