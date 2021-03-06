import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'/**Importamos la libreria http de angular que permite
                                      llamar archivos de un json, el HttpClient es un cliente que permite
                                      hacer peticiones desde angular */
import { City } from './ciudad.model'/*Importamos el objeto ciudad creado como modelo*/
import { ClassGetter } from '@angular/compiler/src/output/output_ast';
import { Dias } from './dias.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  /**Creamos una variable y leemos le api mediante la url de desarrollo para el actual*/
  apiUrl='http://api.openweathermap.org/data/2.5/weather?q=';

  /**Creamos una variable y leemos le api mediante la url de desarrollo para el actual*/
  apiUrlDos='http://api.openweathermap.org/data/2.5/forecast?q=';

  /**Llave que da el API para saber el usuario que esta registrado y permitir usarlo */  
  key='&APPID=9e714e3fc68a3094243ccfe962a8285f';

   /**Creamos una variable llamada httpclient para decirle que use ese modulo
   * dentro de esa clase, y como es solo en la clase, private*/
  constructor(private httpclient:HttpClient) { 
    console.log('El servicio me funciona, OH SI')
  }

  /**Metodo que toma la ciudad a partir del nombre para usarse en  el front */
  getCiudad(nomCiudad){
    console.log(nomCiudad);
    return this.httpclient.get<City[]>(this.apiUrl+nomCiudad+this.key);
  }

   /**Metodo que toma la ciudad a partir del nombre para usarse en  el front y es el de los 5 dias siguientes*/
   getDias(diitas){
    console.log(diitas);
    return this.httpclient.get<Dias[]>(this.apiUrlDos+diitas+this.key);
  }
}
