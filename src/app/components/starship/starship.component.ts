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
  imgShip = '';
  aRebelManufacturers: string[] = ['Corellian', 
                                   'Koensayr', 
                                   'Incom', 
                                   'Gallofree'];
  aEmpireManufacturers: string[] = ['Kuat', 
                                    'Sienar'];
  imgEmpireManufacturer = '';
  imgRebelManufacturer = '';

  constructor(private _starshipsService: StarShipsService,
              private activatedRouter: ActivatedRoute) {
      this.activatedRouter.params.subscribe( params => { 
        this.ship = params;
        this.imgShip = this._starshipsService.GetStarShipImageURL( this.ship );
//console.log('scanning "' + this.ship.manufacturer + '"');
        this.imgEmpireManufacturer = this.Manufacturer( this.ship, this.aEmpireManufacturers );
        if ( this.imgEmpireManufacturer != '' ) this.imgEmpireManufacturer = 'assets/img/logo_' + this.imgEmpireManufacturer + '.png';
//if (this.imgEmpireManufacturer!='') console.log('imatge Empire manufacturer: ' + this.imgEmpireManufacturer );
        if ( this.imgEmpireManufacturer == '' ) {
          this.imgRebelManufacturer = this.Manufacturer( this.ship, this.aRebelManufacturers );
          if ( this.imgRebelManufacturer != '' ) this.imgRebelManufacturer = 'assets/img/logo_' + this.imgRebelManufacturer + '.png';
        }  
//if (this.imgRebelManufacturer!='') console.log('imatge Rebel manufacturer: ' + this.imgRebelManufacturer );

      } )
   }

  ngOnInit(): void {
  }

  // Comprobar si la URL de la imagen de la nave solicitada existe.
  ImageExists( sh: any ): boolean {
    return this._starshipsService.ImageExists( sh );
  }

  Manufacturer( sh: any, aManufacturers: string[] ): string {
    for ( var i = 0; i < aManufacturers.length; i++ ) {
//console.log('scanning "' + aManufacturers[i] + '" in "' + sh.manufacturer + '" ... ' );
//console.log('... ' + sh.manufacturer.includes( aManufacturers[i] ) );
       if( sh.manufacturer.includes( aManufacturers[i] ) )
       {
//console.log('"' + aManufacturers[i] + '" found in "' + sh.manufacturer + '"');
        return aManufacturers[i].toLowerCase();
       }
    }
    return '';
  }

}
