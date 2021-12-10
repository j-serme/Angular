import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Statistique } from '../models/statistique';

@Component({
  selector: 'app-une-statistique',
  templateUrl: './une-statistique.component.html',
  styleUrls: ['./une-statistique.component.css']
})
export class UneStatistiqueComponent implements OnInit {

  @Input() public uneStatistique!: Statistique;

  @Output() Asupprimer = new EventEmitter;

  delete() {
    this.Asupprimer.emit()
  }
  
  constructor() { }

  

  ngOnInit(): void {
  }

}
