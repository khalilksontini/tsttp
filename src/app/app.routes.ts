import { Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { InscrriptionComponent } from './inscrription/inscrription.component';
import { PanierComponent } from './panier/panier.component';

export const routes: Routes = [
  { path: 'accueil', component: AccueilComponent },
  { path: 'connexion', component: ConnexionComponent },
  { path: 'inscrription', component: InscrriptionComponent },
  { path: 'panier', component: PanierComponent },
];
