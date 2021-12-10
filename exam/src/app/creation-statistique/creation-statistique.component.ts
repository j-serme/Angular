import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
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

  public modeEdition = false;
  public statistiqueModifie: Statistique;

  constructor(private singletonFilm: StatistiqueService, private route: ActivatedRoute) {
    let idStatistique = route.snapshot.paramMap.get("idStatistique") 
    
    this.statistiqueModifie = this.singletonFilm.tabStatistiques.find(f => f.identifiant === idStatistique)!;

    if (this.statistiqueModifie) {
      this.identifiant = this.statistiqueModifie.identifiant;
      this.titre = this.statistiqueModifie.titre;
      this.valeur = this.statistiqueModifie.valeur;
      this.modeEdition = true;
    }
  
  }

  ngOnInit(): void {
  }

  validerForm(monForm: NgForm) {
    
    if (!this.modeEdition) {
    this.creerFilm();
  }else {
    this.modifyFilm();
  }
  monForm.reset();
}

creerFilm() {
  let nouveauFilm = new Statistique(
    this.identifiant,
    this.titre,
    this.valeur,
  )
    
    this.singletonFilm.tabStatistiques.push(nouveauFilm);
  }
    
modifyFilm() {
  this.statistiqueModifie.identifiant = this.identifiant
  this.statistiqueModifie.titre = this.titre
  this.statistiqueModifie.valeur = this.valeur
  }
}
