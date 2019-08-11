import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatInputModule} from '@angular/material/input';
import {NgModule } from '@angular/core';

//Modulos de angular materials
@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatInputModule],//Utilizar modulos de materiales
  exports: [MatButtonModule, MatCheckboxModule, MatInputModule],//Exportar modulos
})
export class MiMaterialModule { }//Nombre con el cual se usará el modulo en la app