import { Component } from '@angular/core';
import { Statistique } from './models/statistique';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'exam';

  stat1 = new Statistique("fa1free0-be3b-11mb-58ec-7f4963ecfb46", "Démographie en Espagne", "45M");
  stat2 = new Statistique("fa1free0-be3b-11mb-58ec-7f4963ecfb46", "Nombre de morts en Finlande en 2020", "100K");
}
