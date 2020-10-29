import { ROUTES } from "@angular/router";

import { RouterModule, Routes } from '@angular/router';

import {HomeComponent} from './components/home/home.component';
import {AboutComponent} from './components/about/about.component';
import {StarShipsComponent} from './components/star-ships/star-ships.component';
import {StarshipComponent} from './components/starship/starship.component';
import {BuscadorComponent} from "./components/buscador/buscador.component";
import {PerfilComponent} from "./components/perfil/perfil.component";
import {AuthGuard} from "./servicios/auth.guard";
import {PaginationComponent} from "./components/pagination/pagination.component";


const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'star-ships', component: StarShipsComponent },
    { path: 'starship', component: StarshipComponent },
    { path: 'buscar/:text', component: BuscadorComponent, canActivate: [ AuthGuard ] },
    { path: 'perfil', component: PerfilComponent, canActivate: [ AuthGuard ] },
    { path: 'pagination', component: PaginationComponent },
    { path: '**', pathMatch:'full', redirectTo: 'star-ships' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);