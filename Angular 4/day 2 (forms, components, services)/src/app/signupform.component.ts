import { Component, OnInit } from '@angular/core';
import {User} from './User';
@Component({
    selector:'userform',
    templateUrl: 'signupform.component.html',
})
export class SignUpFormComponent  {
    user:User = {
            name : 'James',             
            phone:"1234",
            address:'India'
        }
    postForm(userObj){
        //ajax post call
        console.log(userObj);
    }
}