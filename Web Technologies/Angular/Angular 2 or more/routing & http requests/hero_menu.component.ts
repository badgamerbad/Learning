import { Component } from '@angular/core';

@Component({
    selector: 'hero-menu',
    template: `
        <ul>
            <li *ngFor="let item of menuItems"><a routerLink="{{item.route}}">{{item.routeName}}</a></li>
        </ul>
        <router-outlet></router-outlet>
    `,
    styles: [
        ``
    ],
    providers: []
})
export class HeroMenuComponent {
    menuItems;
    constructor(){
        this.menuItems = [
            {
                route: '',
                routeName: 'Home'
            },
            {
                route: 'heroforms',
                routeName: 'Forms'
            },
            {
                route: 'herotour',
                routeName: 'Tour of Heroes'
            },
            {
                route: 'http',
                routeName: 'HTTP Requests'
            },
        ]
    }
}