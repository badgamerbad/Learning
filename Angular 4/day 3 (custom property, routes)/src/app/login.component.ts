import { LoginService } from './login.service';
import { Component, OnInit } from '@angular/core';
//import { Router } from '@angular/router';

@Component({
    selector: 'login',
    template: `
        <h3>Login Component</h3>
        Enter Username: <input type="text" #newname [(ngModel)]="name" />
        Enter Password: <input type="password" [(ngModel)]="password" />
        <button (click)="login()">Login</button>
        <br>
        Variable name in the class: {{name}}<br/>
        Variable name in the class: {{newname.value}}
    `
})

export class LoginComponent implements OnInit {
    name:string = "admin";
    password:string= "admin";

    constructor(private loginservice: LoginService) {

    }
    ngOnInit() {

    }
    login():void{
        this.loginservice.setUsername(this.name);
        //this.router.navigate(['/products']);
    }
}