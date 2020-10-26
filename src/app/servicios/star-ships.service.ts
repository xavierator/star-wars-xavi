import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class StarShipsService {

    imgURL = 'https://starwars-visualguide.com/assets/img/starships/';
    imgEXT = '.jpg';
        
    constructor(private http: HttpClient) {
        console.log('servicio listo ...');
     }

     GetStarShips(url) {
        const headers = new HttpHeaders({'Authorization': 'none'});
        
        if (!url) {
            url = 'https://swapi.dev/api/starships/'
        }
        return this.http.get( url, { headers } );
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
  

}