import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AuthService } from 'src/app/servicios/auth.service';
import { StarShipsService } from "../../../servicios/star-ships.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  constructor(private _starshipsService: StarShipsService,
              private SearchRouter: Router,
              public auth: AuthService) { }

  ngOnInit(): void {
  }

  buscarShip( text: string ) {
console.log(Date + ' - ' + 'buscar ... ' + text);
//    this._starshipsService.buscarShips( text );
    this.SearchRouter.navigate( ['/buscar', text ] );

  }

}
