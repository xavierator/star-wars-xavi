import { Component, OnInit } from '@angular/core';

import { StarShipsService } from "../../servicios/star-ships.service";

@Component({
  selector: 'app-star-ships',
  templateUrl: './star-ships.component.html'
})
export class StarShipsComponent implements OnInit {

  starships: any[] = [];
  imgURL = 'https://starwars-visualguide.com/assets/img/starships/';
  imgEXT = '.jpg';

  constructor(private _starshipsService: StarShipsService) {
    this._starshipsService.GetStarShips('').subscribe( (data: any) => {
//      console.log('resultats: ' + data.results);
      this.starships = data.results;

    });
      
   }

  ngOnInit() {
  }

  // Retornar la ID de la nave solicitada.
  getStarshipId( sh: any ): string {
    return sh.url.split("/").filter(function(item) {
      return item !== "";
  }).slice(-1)[0];
  }

  // Comprobar si la URL de la imagen de la nave solicitada existe.
  ImageExists( sh: any ): boolean {
    var http = new XMLHttpRequest();
    http.open('HEAD', this.getImageURL( sh ), false);
    http.send();
    return http.status != 404;

    return true;
  }

  // Retornar la URL de la imagen de la nave solicitada.
  getImageURL( sh: any ){
    return this.imgURL + this.getStarshipId( sh ) + this.imgEXT;
  }

}
