import { Component, OnInit, Input } from '@angular/core';
import { Hero } from './hero'
@Component({
  selector: 'app-hero-child',
  templateUrl: './hero-child.component.html',
  styleUrls: ['./hero-child.component.scss']
})
export class HeroChildComponent implements OnInit {

  constructor() {
    this.hero = new Hero(1, "Default Hero");
    this.masterName = "Default Master"
  }

  ngOnInit() {
  }
  @Input() hero: Hero;
  @Input('master') masterName: string;
}
