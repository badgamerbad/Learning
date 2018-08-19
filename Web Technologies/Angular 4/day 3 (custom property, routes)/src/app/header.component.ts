import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';

@Component({
    selector: 'app-header',
    template: `<h2>Welcome {{username}}</h2>`
})

export class HeaderComponent implements OnInit {
    username:string;
    constructor(private loginservice:LoginService){

    }
    ngOnInit(){
        this.loginservice.getUsername().subscribe(newname_tmp=>{
            this.username = newname_tmp;
        })
    }
}