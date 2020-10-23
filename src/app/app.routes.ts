import { ROUTES } from "@angular/router";

import { RouterModule, Routes } from '@angular/router';

import {HomeComponent} from './components/home/home.component';
import {AboutComponent} from './components/about/about.component';
import {StarShipsComponent} from './components/star-ships/star-ships.component';

const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'star-ships', component: StarShipsComponent },
    { path: '**', pathMatch:'full', redirectTo: 'star-ships' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);