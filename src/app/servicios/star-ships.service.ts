import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from "@angular/router";

@Injectable()
export class StarShipsService {

    imgURL = 'https://starwars-visualguide.com/assets/img/starships/';
    imgEXT = '.jpg';
        
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
//return this.http.get( url, { headers } ).toPromise();
/*  this.http.get( url, { headers } ).toPromise().then( data => {
      console.log('promise resolved ... ', data);
      return data;
    })*/
//    this.getCountries('EUR'); 
/*    let aCacheStarShips: any[] = [];
    const asincrono = async () => {
sessionStorage.removeItem('aCacheStarShips');
    aCacheStarShips = JSON.parse( sessionStorage.getItem('aCacheStarShips') );
console.log('Storage Obtenido: ', aCacheStarShips);
    if ( aCacheStarShips == null ){
console.log('Empty cache, read API ...');
      const headers = new HttpHeaders({'Authorization': 'none'});
      if ( !url ) {
         url = 'https://swapi.dev/api/starships/'
      }
this.http.get( url, { headers } ).subscribe( (data: any) => {
        aCacheStarShips = data.results;
console.log('API ok : ', aCacheStarShips);
        sessionStorage.setItem('aCacheStarShips', JSON.stringify(aCacheStarShips));      
        return aCacheStarShips;
        
      });

    }
    else
    {
      console.log('caché read ok : ', aCacheStarShips);
      return aCacheStarShips;
    }
  }*/
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
  

buscarStarShips( text: string ): Promise<any[]> {
    let aShips: any[] = [];
    let aResultats: any[] = [];

    text = text.toLowerCase();

    return new Promise((resolve, reject) => {
    this.GetStarShips('').subscribe( (data: any) => {
            aShips = data.results;
console.log('resultados API: ' + aShips.length + ' leidos');

            for( let ship of aShips ) {
//console.log('procesando elemento ... ' + ship.name);

                    let cShip = ship.name.toLowerCase();
                    if ( cShip.indexOf(text) >= 0 ) {
                      aResultats.push( ship );
console.log( ship.name + ' found ...' );
                    }
            }
//            this.SearchRouter.navigate( ['/buscar', text ] );
            resolve(aResultats);
console.log( aResultats.length + ' result/s encontrados', aResultats );
          });
        });
  }

}
