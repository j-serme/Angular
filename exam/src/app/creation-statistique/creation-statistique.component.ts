import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Statistique } from '../models/statistique';
import { StatistiqueService } from '../statistique.service';

@Component({
  selector: 'app-creation-statistique',
  templateUrl: './creation-statistique.component.html',
  styleUrls: ['./creation-statistique.component.css']
})
export class CreationStatistiqueComponent implements OnInit {

  public identifiant!: string;
  public titre!: string;
  public valeur! : string;
  
  creerStatistique(monForm: NgForm) {

    let nouvelleStatistique = new Statistique(
      this.identifiant,
      this.titre,
      this.valeur,
    )
    this.singletonStatistique.tabStatistiques.push(nouvelleStatistique);
  }
  constructor(private singletonStatistique: StatistiqueService) {
    
    }
  ngOnInit(): void {
  }
};

