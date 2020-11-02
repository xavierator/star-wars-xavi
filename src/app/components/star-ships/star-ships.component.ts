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
  public page: number = 1;
  public totalPages: number;
  public numStarShips: number;
  public numResults: number;

  DEFAULT_RESULTS: number = 4;
  
  constructor( private _starshipsService: StarShipsService,
               private StarshipRouter: Router,
               public auth: AuthService ) {
    this.numResults = this.DEFAULT_RESULTS;
    this.getStarShipsByPage(this.page);

  }


  ngOnInit() {
  }


  // Lanzar paginación del listado.
  async getStarShipsByPage(page: number) {
    let todos: any[] = [];
    todos = await this._starshipsService.buscarStarShips('');
    this.numStarShips = todos.length;
    this.totalPages = Math.ceil(this.numStarShips / this.numResults);

    this.starships = [];
    let nStart = ( this.numResults * ( page - 1) );
    for ( let i = ( this.numResults * ( page - 1) ); 
          i < nStart + this.numResults && i < todos.length;
          i++ ) {
          this.starships.push(todos[ i ]);
        }

  }

  goToPage(page: number) {
    this.page = page;
    this.getStarShipsByPage(page);

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
//console.log('Show Starship: ' + sh.name);
    this.StarshipRouter.navigate( ['/starship', sh] );

  }

  // Cambiar los items por página.
  changeItems(items: number){
    this.numResults = items;
    this.getStarShipsByPage( 1 );

  }


}
