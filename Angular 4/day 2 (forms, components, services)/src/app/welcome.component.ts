//component is a simple typescript class

import { Component } from '@angular/core';

@Component({
    selector: 'welcome',
    template: `<h1>Welcome {{username}}</h1>`,
    //templateUrl: './app.welcome.component.html',
    //styleUrls: ['./app.welcome.component.css'],
    styles: ['h1{color:red}']
})

export class WelcomeComponent {
    username:string = "James";
}