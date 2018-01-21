import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: '',
    template: `
        <h1>The param passed is {{paramPassed}}</h1>
    `,
    styles: [
        ``
    ]
})
export class HttpRequestsChildComponent {
    paramPassed;
    constructor(private activeRoute: ActivatedRoute){
        this.activeRoute.params.subscribe(routeParam => {
            this.paramPassed = routeParam['user'];
        })
    }
}