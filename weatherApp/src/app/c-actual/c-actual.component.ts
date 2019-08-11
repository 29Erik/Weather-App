import { Component, OnInit, Input } from '@angular/core';
import { City } from '../ciudad.model';

@Component({
  selector: 'app-c-actual',
  templateUrl: './c-actual.component.html',
  styleUrls: ['./c-actual.component.css']
})
export class CActualComponent implements OnInit {  
  @Input() miCiudad:City[];
  constructor() { }

  ngOnInit() {
  }

}
