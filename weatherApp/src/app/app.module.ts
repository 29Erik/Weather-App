import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//-----------------------
//Componentes
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConsultaComponent } from './consulta/consulta.component';
import { CActualComponent } from './c-actual/c-actual.component';
import { CSiguienteComponent } from './c-siguiente/c-siguiente.component';
import { HttpClientModule } from'@angular/common/http';/**Tambien debe tener el modulo del tipo que usa el servicio */
//-----------------------

//-----------------------
//Servicios
import {DataService} from './data.service';/**Se importa el servicio y se incluye en providers */
//-----------------------

//-----------------------
//Animaciones
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
//-----------------------

//-----------------------
//Materiales
import { MiMaterialModule } from './material';//Importamos el typescript creado para el material
//-----------------------

@NgModule({
  declarations: [
    AppComponent,
    ConsultaComponent,
    CActualComponent,
    CSiguienteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,//Llamamos el módulo de las animaciones para angular Materials
    MiMaterialModule,//Se llama al modulo creado del material
    HttpClientModule//
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
