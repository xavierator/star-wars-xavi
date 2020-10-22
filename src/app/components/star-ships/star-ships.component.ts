import { Component, OnInit } from '@angular/core';

import { StarShipsService } from "../../servicios/star-ships.service";

@Component({
  selector: 'app-star-ships',
  templateUrl: './star-ships.component.html'
})
export class StarShipsComponent implements OnInit {

  starships: any[] = [];
//  shipId = '?';

  constructor(private _starshipsService: StarShipsService) {
    this._starshipsService.GetStarShips('').subscribe( (data: any) => {
      console.log('resultats: ' + data.results);
      this.starships = data.results;
//      this.shipId = this.getStarshipId();

    });
      
   }

  ngOnInit() {
  }

  getStarshipId(): any {
/*    var url: string = this.starships[0].url;
    console.log('url ship: ' + this.starships.url);
    console.log('id ship: ' + url.split("/").filter(function(item) {
      return item !== "";
  }).slice(-1)[0]);
    this.shipId = url.split("/").filter(function(item) {
        return item !== "";
    }).slice(-1)[0];*/
}


}
