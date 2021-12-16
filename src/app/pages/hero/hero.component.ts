import { Component, Input, OnInit } from '@angular/core';
import { HeroModel } from '../../domains/models/hero.model';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  @Input() hero: HeroModel;

  constructor() {
    this.hero = new HeroModel()
  }

  ngOnInit(): void {
  }
}
