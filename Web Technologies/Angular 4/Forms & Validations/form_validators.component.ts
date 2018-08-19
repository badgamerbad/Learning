import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';

import { forbiddenNameValidator } from './form_validator.directive';

@Component({
    selector: 'form-validators',
    template: `
        Get Hero Name: {{heroName}}
        Get Hero Power: {{heroPower}}
        Get hero Alter Ego: {{heroAlterEgo}}
        <form [formGroup]="heroForm"> 
            <input type="text" placeholder="Hero Name" formControlName="heroName">
            <input type="text" placeholder="Hero Name" name="alterEgo" formControlName="alterEgo">
            <select name="power" formControlName="power">
                <option *ngFor="let pow of powers" [value]="pow">{{pow}}</option>
            </select>
            <br>
            <button type="submit" [disabled]="!heroForm.valid">Submit</button>
        </form>
    `,
    styles: [
        `
        `
    ],
    providers: [ ]
})
export class FormValidators implements OnInit {
    powers = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];
    hero = {
        id: 18,
        name: 'Dr IQ',
        power: this.powers[0],
        alterEgo: 'Chuck Overheat'
    };
    heroForm;
    ngOnInit(): void{
        this.heroForm = new FormGroup({
            'heroName': new FormControl(this.hero.name, [
                Validators.required,
                Validators.minLength(4),
                Validators.maxLength(10),
                forbiddenNameValidator(/bob/i)
            ]),
            'alterEgo': new FormControl(this.hero.alterEgo, [
                Validators.required
            ]),
            'power': new FormControl(this.hero.power)
        });
    }
    get heroName() {
        return this.heroForm.get('heroName');  
    }
    get heroPower() {
        return this.heroForm.get('power');
    } 
    get heroAlterEgo() {
        return this.heroForm.get('alterEgo');
    }
}