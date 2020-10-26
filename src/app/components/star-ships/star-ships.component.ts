import { Component, OnInit } from '@angular/core';
import { StarShipsService } from "../../servicios/star-ships.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-star-ships',
  templateUrl: './star-ships.component.html'
})

export class StarShipsComponent implements OnInit {

  starships: any[] = [];
  
  constructor( private _starshipsService: StarShipsService,
               private StarshipRouter: Router ) {
    this._starshipsService.GetStarShips('').subscribe( (data: any) => {
//      console.log('resultats: ' + data.results);
      this.starships = data.results;

    });
      
   }

  ngOnInit() {
  }

  // Comprobar si la URL de la imagen de la nave solicitada existe.
  ImageExists( sh: any ): boolean {
    return this._starshipsService.ImageExists( sh );
  }

  // Retornar la URL de la imagen de la nave solicitada.
  getImageURL( sh: any ) {
    return this._starshipsService.GetStarShipImageURL( sh );
  }

  // ...
  showStarship( sh: any ) {
//console.log('Show Starship: ' + sh.name);
    this.StarshipRouter.navigate( ['/starship', sh] );
  }

}
