import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

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
import { StarshipComponent } from './components/starship/starship.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { PaginationComponent } from './components/pagination/pagination.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    StarShipsComponent,
    AboutComponent,
    StarshipComponent,
    BuscadorComponent,
    PerfilComponent,
    PaginationComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    HttpClientModule,
    FormsModule

  ],
  providers: [
    StarShipsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
