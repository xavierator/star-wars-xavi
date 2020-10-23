import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

// Rutes
import { APP_ROUTING } from './app.routes';

// Serveis
import { StarShipsService } from "./servicios/star-ships.service";

// Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { StarShipsComponent } from './components/star-ships/star-ships.component';
import { AboutComponent } from './components/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    StarShipsComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    HttpClientModule

  ],
  providers: [
    StarShipsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
