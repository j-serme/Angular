import { Component, Input } from '@angular/core';
import { Statistique } from './models/statistique';
import { UneStatistiqueComponent } from './une-statistique/une-statistique.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'exam';

  @Input() public uneStatistique!:Statistique;
}
