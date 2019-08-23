import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
    selector: 'app-hero-form',
    template: `
        {{diagnostic}}
        <form #heroForm="ngForm" (ngSubmit)="onSubmit(heroForm.value)">
            <label>Name</label>
            <input type="text" minlength="4" maxlength="6" required name="heroName" [(ngModel)]="model.name" #heroName="ngModel">
            <br>
            <div [hidden]="heroName.valid">Hero Name is Required</div>
            <!-- <div *ngIf="!heroName.errors.minlength">Hero Name should be atleast long</div> -->
            <br>
            <label>Alter Ego</label>
            <input type="text" required name="alterEgo" [(ngModel)]="model.alterEgo" #alterEgo="ngModel">
            <br>
            <div [hidden]="alterEgo.valid">Alter Ego is Required</div>
            <br>
            <select [(ngModel)]="model.power" name="power">
                <option *ngFor="let pow of powers" [value]="pow" >{{pow}}</option>
            </select>
            <button [disabled]="!heroForm.form.valid" type="submit">Submit</button>
        </form>
    `,
    styles: [
        `
            .ng-valid.required, .ng-valid[required] {
                border-left: 5px solid #42A948;
            }
            .ng-invalid:not(form) {
                border-left: 5px solid #a94442;
            }
        `
    ]
})
export class HeroFormComponent implements OnInit {
    powers = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];
    model = {
        id: 18,
        name: 'Dr IQ',
        power: this.powers[0],
        alterEgo: 'Chuck Overheat'
    };
    submitted = false;
    onSubmit(formObj){
        console.log(formObj);
        this.submitted = true;
    }
    get diagnostic(){
        return JSON.stringify(this.model);
    }
    heroForm;
    ngOnInit(){
        this.heroForm = new FormControl(this.model.name, [
            Validators.required
        ])
    }
}