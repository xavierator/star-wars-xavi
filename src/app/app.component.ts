import { Component, OnInit } from '@angular/core';
import { AuthService } from './servicios/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'star-wars-xavi';
  constructor(private auth: AuthService) {}

  ngOnInit() {
    this.auth.localAuthSetup();
  }
}
