import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'user-details',
    template: `
        <h2>User Details for {{username}}</h2>
    `,
    styles: ['']
})
export class UserDetailsComponent implements OnInit {
    username:string;
    constructor(private activeRoute:ActivatedRoute) {
        //Access the route param here
        this.activeRoute.params.subscribe(routeParams => {
            this.username = routeParams['username'];
        })
    }

    ngOnInit() { 

    }

}