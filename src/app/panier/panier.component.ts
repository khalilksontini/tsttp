import { Component } from '@angular/core';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-panier',
  standalone: true,
  imports: [MatListModule],
  templateUrl: './panier.component.html',
  styleUrl: './panier.component.scss',
})
export class PanierComponent {}
