import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from "@angular/router";
import { formatDate } from '@angular/common';

@Injectable()
export class StarShipsService {

    imgURL = 'https://starwars-visualguide.com/assets/img/starships/';
    imgEXT = '.jpg';
    REFRESH_CACHE = 5; // minutos para cada refresco del caché de datos.
        
    constructor(private http: HttpClient,
                private SearchRouter: Router) {
        console.log('servicio listo ...');
     }

    GetStarShips(url): any {
      const headers = new HttpHeaders({'Authorization': 'none'});
      if ( !url ) {
         url = 'https://swapi.dev/api/starships/'
      }
      return this.http.get( url, { headers } ); // retorna un JSON per defecte
    }


    // Retornar la URL de la imagen de la nave solicitada.
    GetStarShipImageURL( ship: any ) {
      return this.imgURL + this.GetStarshipId( ship ) + this.imgEXT;
    }


    // Retornar la ID de la nave solicitada.
    GetStarshipId( sh: any ): string {
      return sh.url.split("/").filter(function(item) {
            return item !== "";
        }).slice(-1)[0];
    }

    // Comprobar si la URL de la imagen de la nave solicitada existe.
    ImageExists( ship: any ): boolean {
      var http = new XMLHttpRequest();
      http.open('HEAD', this.GetStarShipImageURL( ship ), false);
      http.send();
      return http.status != 404;
  
    }


    // Anulada, utilizamos buscarStarShips con parámetro de búsqueda ''.
/*    listarStarShips(): Promise<any[]> {
      let aShips: any[] = [];
      let dataCacheUpdate = new Date();

      return new Promise((resolve, reject) => {
        aShips = this.ProcesarCache(); // Leer los datos del caché si todavía no toca actualizarlo.

        if ( aShips.length > 0 ) {
          resolve(aShips);
        } 
        else {
          sessionStorage.setItem( 'dDateCache', dataCacheUpdate.toISOString() );
console.log('Caché actualizado, API ok ... ', sessionStorage.getItem( 'dDateCache'));
          this.GetStarShips('').subscribe( (data: any) => {
            aShips = data.results;
console.log('resultado/s API: ' + aShips.length + ' leido/s', aShips);
            sessionStorage.setItem('aCacheStarShips', JSON.stringify(aShips));
//console.log( aShips.length + ' resultado/s encontrado/s', aShips );
            resolve(aShips);

          });

        }

      });
      
    } */


    // Se han optimizado las funciones de listar y buscar en una sola.
    // Si hay texto a buscar se ejecuta el filtro que para el listado no se dará.
    buscarStarShips( text: string ): Promise<any[]> {
      let aShips: any[] = [];
      let aResultats: any[] = [];
      let dataCacheUpdate = new Date();

      text = text.toLowerCase();

      return new Promise((resolve, reject) => {
        aShips = this.ProcesarCache(); // Leer los datos del caché si todavía no toca actualizarlo.

        if ( aShips.length > 0 ) {
          if ( text != '' ) {
            aResultats = this.FiltrarInfo(aShips, text);
          }
          else {
            aResultats = aShips;
          }
        resolve(aResultats);
        } 
        else {
          sessionStorage.setItem( 'dDateCache', dataCacheUpdate.toISOString() );
console.log('Caché actualizado, API ok ... ', sessionStorage.getItem( 'dDateCache'));
          this.GetStarShips('').subscribe( (data: any) => {
            aShips = data.results;
console.log('resultado/s API: ' + aShips.length + ' leido/s', aShips);
            sessionStorage.setItem('aCacheStarShips', JSON.stringify(aShips));

            if ( text != '' ) {
              aResultats = this.FiltrarInfo(aShips, text);
            }
            else {
              aResultats = aShips;
            }

console.log( aResultats.length + ' resultado/s encontrado/s', aResultats );
            resolve(aResultats);

          });

        }

      });

    }


    // Procesar y leer los datos del caché si todavía no toca actualizarlo.
    ProcesarCache(): any {
      let aResultats: any[] = [];
      let dataCacheUpdate = new Date();

      let dateCache = new Date( sessionStorage.getItem( 'dDateCache') );
console.log('dateCache leido ... ', dateCache);
              if ( Number( dateCache ) != 0 ) {
      var diff = Math.abs( Number(dataCacheUpdate) - Number(dateCache));
      var min = Math.floor((diff/1000)/60);
console.log('Cache ON, actualizado hace: ' + min + ' minuto/s');

                if ( min <= this.REFRESH_CACHE ) {
                  aResultats = JSON.parse( sessionStorage.getItem('aCacheStarShips') );
console.log('Usar caché actual ...', aResultats);
                }

              }
              else {
console.log('Cache OFF, activarlo');
              }
      
      return aResultats;

    }


    // Filtrar el array aInfo recibido y devolver solo los que cumplen el criterio indicado en cText
    FiltrarInfo( aInfo: any[], cText: string): any {
      let aResultats: any[] = [];
//console.log( 'FiltrarInfo por "' + cText + '" en ' + aInfo.length + ' elementos ...', aInfo );
      for( let ship of aInfo ) {
//console.log( 'procesando ... ' + ship.name );
        let cShip = ship.name.toLowerCase();
        if ( cShip.indexOf(cText) >= 0 ) {
          aResultats.push( ship );
console.log( ship.name + ' encontrado ...' );
          }
        }
      return aResultats;

    }

}
