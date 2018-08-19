import { Component } from '@angular/core';

@Component({
    selector: 'menu',
    template: `
        <ul class="nav nav-pills">
            <li *ngFor="let item of menuItem;">
                <a routerLink="{{item | lowercase}}">{{item}}</a>
            </li>
        </ul>
    `
})

export class MenuComponent {
    menuItem:string[];
    constructor(){
        this.menuItem = ["Home", "Login", "Users", "Profile"];
    }
}