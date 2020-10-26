import { Component, OnInit } from '@angular/core';
import { StarShipsService } from "../../servicios/star-ships.service";
import { ActivatedRoute } from "@angular/router";
//import { StarShipsComponent } from "../star-ships/star-ships.component";

@Component({
  selector: 'app-starship',
  templateUrl: './starship.component.html'
})
export class StarshipComponent implements OnInit {

  ship: any = {};
  shipImage = '';
  bEmpireShip = true;

  constructor(private _starshipsService: StarShipsService,
              private activatedRouter: ActivatedRoute) {
    this.activatedRouter.params.subscribe( params => { 
      this.ship = params;
      this.shipImage = this._starshipsService.GetStarShipImageURL( this.ship );
      this.bEmpireShip = ( this.ship.manufacturer.indexOf('Sienar') >= 0 ||
                           this.ship.manufacturer.indexOf('Kuat') >= 0 );
      } )
   }

  ngOnInit(): void {
  }

  // Comprobar si la URL de la imagen de la nave solicitada existe.
  ImageExists( sh: any ): boolean {
    return this._starshipsService.xImageExists( sh );
  }

}
