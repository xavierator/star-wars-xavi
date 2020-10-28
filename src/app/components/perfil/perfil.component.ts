import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html'
})
export class PerfilComponent implements OnInit {

  constructor(public auth:AuthService) { }

  ngOnInit(): void {
    this.auth.userProfile$.subscribe( perfil => {
      console.log(perfil);
    })
  }

}
