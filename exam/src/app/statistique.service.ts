import { Injectable } from '@angular/core';
import { Statistique } from './models/statistique';

@Injectable({
  providedIn: 'root'
})
export class StatistiqueService {

  public tabStatistiques: Statistique[] = [];
  constructor() { 
  
  let stat1 = new Statistique("fa1free0-be3b-11mb-58ec-7f4963ecfb46", "Démographie en Espagne", "45M");
  let stat2 = new Statistique("fa1free0-be3b-11mb-58ec-7f4963ecfb46", "Nombre de morts en Finlande en 2020", "100K");
  this.tabStatistiques.push(stat1, stat2);

}
}