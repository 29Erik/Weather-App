import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'/**Importamos la libreria http de angular que permite
                                      llamar archivos de un json, el HttpClient es un cliente que permite
                                      hacer peticiones desde angular */
import { City } from './ciudad.model'/*Importamos el objeto ciudad creado como modelo*/

@Injectable({
  providedIn: 'root'
})
export class DataService {
  /**Creamos una variable y leemos le api mediante la url de desarrollo */
  apiUrl='api.openweathermap.org/data/2.5/weather?q={city name}';
   /**Creamos una variable llamada httpclient para decirle que use ese modulo
   * dentro de esa clase, y como es solo en la clase, private*/
  constructor(private httpclient:HttpClient) { }

  /**Metodo que toma la ciudad a partir del nombre para usarse en  el front */
  getCiudad(){
    return this.httpclient.get<City[]>(this.apiUrl);
  }
}
