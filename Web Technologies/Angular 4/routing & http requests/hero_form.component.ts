import { Component } from '@angular/core';
import { HeroForm } from './hero_form';

@Component({
    selector: 'app-hero-form',
    template: `
        {{diagnostic}}
        <form #heroForm="ngForm">
            <label for="heroName">Name</label>
            <input id="heroName" type="text" [(ngModel)]="model.name" name="heroName" required #heroName="ngModel">
            <br>
            <div [hidden]="heroName.valid || heroName.pristine">Name is required</div>
            <label for="alterEgo">Alter Ego</label>
            <input id="alterEgo" type="text" [(ngModel)]="model.alterEgo" name="alterEgo" required>
            <label for="power">Hero Power</label>
            <select id="power" required>
                <option *ngFor="let pow of powers" [value]="pow">{{pow}}</option>
            </select>
            <button type="submit">Submit</button>
        </form>
    `,
    styles: [``]
})

export class HeroFormComponent {
    powers = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];
    model = new HeroForm(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');
    submitted = false;
    onSubmit() {
        this.submitted = true;
    }
    get diagnostic() {
        return JSON.stringify(this.model);
    }
}