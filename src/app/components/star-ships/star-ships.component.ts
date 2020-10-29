import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AuthService } from 'src/app/servicios/auth.service';
import { StarShipsService } from "../../servicios/star-ships.service";

@Component({
  selector: 'app-star-ships',
  templateUrl: './star-ships.component.html'
})

export class StarShipsComponent implements OnInit {

  starships: any[] = [];
  
  constructor( private _starshipsService: StarShipsService,
               private StarshipRouter: Router,
               public auth: AuthService ) {

    this.doListar();

    // Funciona OK sense gestió de caché
/*    this._starshipsService.GetStarShips('').subscribe( (data: any) => {
        console.log('resultats star-ships: ', data.results);
      this.starships = data.results;

    });*/

   }

  // Lanzar listado.
  async doListar() {
//    this.starships = await this._starshipsService.listarStarShips();
    this.starships = await this._starshipsService.buscarStarShips('');
    
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

  // Mostrar ficha de la nave solicitada
  showStarship( sh: any ) {
//console.log('Show Starship: ' + sh.name);
    this.StarshipRouter.navigate( ['/starship', sh] );
  }

}
