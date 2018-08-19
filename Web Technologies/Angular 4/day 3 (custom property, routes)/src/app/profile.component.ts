import { Component, OnInit,Input } from '@angular/core';

@Component({
    selector: 'profile',
    template: `
        <h2>Profiie Name is {{profileName}}</h2>
        <input type="text" [(ngModel)]="profileName">
        <button (click)="updateName()">Update</button>
    `
})

export class ProfileComponent implements OnInit {
    @Input() //value will be set by parent
    profileName:string;
    constructor(){

    }
    ngOnInit(){

    }
    //use @Output here
    updateName():void {

    }
}