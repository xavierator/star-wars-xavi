import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { ActivatedRoute } from "@angular/router";
import { StarShipsService } from "../../servicios/star-ships.service";
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html'
})
export class BuscadorComponent implements OnInit {

  aFound: any[] = [];
  searchText: string = '';

  constructor(private _starshipsService: StarShipsService,
              private StarshipRouter: Router,
              private activatedRoute: ActivatedRoute,
              public auth:AuthService) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe( params => {
      this.searchText = params['text'];
console.log('buscando ... ' + params['text']);
      this.doBuscar( this.searchText );

    });

  }

  // Lanzar filtro de búsqueda.
  async doBuscar( searchText: string ) {
    this.aFound = await this._starshipsService.buscarStarShips( this.searchText );
//console.log('resultados ... ', this.aFound);

  }

  // Comprobar si la URL de la imagen de la nave solicitada existe.
  ImageExists( sh: any ): boolean {
    return this._starshipsService.ImageExists( sh );
  }

  // Retornar la URL de la imagen de la nave solicitada.
  getImageURL( sh: any ) {
    return this._starshipsService.GetStarShipImageURL( sh );
  }

  // Mostrar ficha de la nave solicitada.
  showStarship( sh: any ) {
        this.StarshipRouter.navigate( ['/starship', sh] );
  }
    
}
