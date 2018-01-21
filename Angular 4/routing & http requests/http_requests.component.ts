import { Component, OnInit } from '@angular/core';
import { HttpRequestService } from './http_requests.service';

@Component({
    selector: 'http-requests',
    template: `
        <ul>
            <li *ngFor="let user of usersList"><a [routerLink]="['httpchild', user.name]">{{user.name}}</a></li>
        </ul>
        <router-outlet></router-outlet>
    `,
    styles: [
        ``
    ],
    providers: [ HttpRequestService ]
})
export class HttpRequests implements OnInit {
    usersList:any;
    ngOnInit(){

    }
    constructor(private httpService: HttpRequestService) {
        this.httpService.getUsers().subscribe(users=>{
            this.usersList = users;
        });
    }
    postUser(formObj){
        this.httpService.postUsers(formObj).subscribe(res=>{
            console.log(res);
        })
    }
}