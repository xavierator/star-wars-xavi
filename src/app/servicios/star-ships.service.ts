import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class StarShipsService {
    
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

}