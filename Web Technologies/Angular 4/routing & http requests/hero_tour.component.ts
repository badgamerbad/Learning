import { Component } from '@angular/core';

import { HeroTour } from './hero_tour';

@Component({
    selector: 'hero-tour',
    template: `
        <p>Tour of {{heroes}}</p>
        <li *ngFor="let hero of heroes">{{hero}}</li>
        
        <p>My Hero is {{myHero.name}}</p>
        
        <p *ngIf="heroes.length > 3">There are many Heroes</p>
        <br>
        <p>Get Input from $event</p>
        <input (keyup)="onKeyUp($event)">
        <br>
        The Value from $event is {{keyUpValue}}
        <p>Get Input from template reference variable</p>
        <input type="text" #referenceVariable (keyup)="1">
        <br>
        The value from template reference variable is {{referenceVariable.value}}
    `,
    styles: [
        ``
    ]
})
export class HeroTourComponent {
    heroes = [
        new HeroTour(1, 'Windstorm'),
        new HeroTour(1, 'Bombasto'),
        new HeroTour(1, 'Magneta'),
        new HeroTour(1, 'Tornado'),
      ];
      myHero = this.heroes[0];
      keyUpValue;
      onKeyUp(event: KeyboardEvent){
        this.keyUpValue = (<HTMLInputElement>event.target).value;
      }
}