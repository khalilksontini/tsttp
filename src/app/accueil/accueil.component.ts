import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
@Component({
  selector: 'app-accueil',
  standalone: true,
  imports: [MatButtonModule, MatCardModule],
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.scss',
})
export class AccueilComponent {
  titre!: string;
  prix!: string;
  niveau!: string;
  description!: string;

  ngOnInit() {
    this.titre = 'chien';
    this.prix = '30';
    this.niveau = 'debutant';
    this.description =
      'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan';
  }
}
