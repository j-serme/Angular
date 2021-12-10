import { Component, OnInit } from '@angular/core';
import { Statistique } from '../models/statistique';
import { StatistiqueService } from '../statistique.service';

@Component({
  selector: 'app-liste-statistiques',
  templateUrl: './liste-statistiques.component.html',
  styleUrls: ['./liste-statistiques.component.css']
})
export class ListeStatistiquesComponent implements OnInit {

  tabStatistiques: Statistique[];

  constructor(public singletonStatistiques : StatistiqueService) { 
    this.tabStatistiques = this.singletonStatistiques.tabStatistiques;
  }

  supprimer(statistique: Statistique) {
    let index = this.tabStatistiques.indexOf(statistique);
    if (index != -1) {
      this.tabStatistiques.splice(index, 1);
    }
  }

  ngOnInit(): void {
  }

}
