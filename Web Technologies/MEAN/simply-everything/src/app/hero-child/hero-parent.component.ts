import { Component } from '@angular/core';

import { HEROES } from './heroes'

@Component({
    selector: 'app-hero-parent',
    template: `
        <h2>{{master}} controls {{heroes.length}} heroes</h2>
        <app-hero-child *ngFor="let hero of heroes.heroes" [hero]="hero" [master]="master"></app-hero-child>
    `
})

export class HeroParentComponent {
    heroes;
    // heroes = ["Mr. IQ", "Magneta", "Bombasto"];
    constructor() {
        this.heroes = new HEROES();
        console.log(this.heroes)
    }
    master = 'Master';
}