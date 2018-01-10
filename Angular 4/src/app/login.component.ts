import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'login',
    template:`<h3>Login Component</h3>
              
              Enter Username: <input type="text" [(ngModel)]="name"/><br>
              
              Enter Username: <input type="password" #newpassword [(ngModel)]="password"/><br>
              <button (click)="login()">Login</button>
              Variable Name in the class: {{name}} <br>
              Variable Name in the view: {{newpassword.value}} <br>
        ` 
})
export class LoginComponent implements OnInit {
    name:string="admin";
    password:string="admin";
    constructor() { }

    ngOnInit() { }
    login():void{
        
    }
}