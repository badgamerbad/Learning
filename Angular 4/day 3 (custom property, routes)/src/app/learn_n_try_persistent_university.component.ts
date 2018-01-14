import { Component } from '@angular/core';

import { learn_n_try_persistent_universityService } from './learn_n_try_persistent_university.service';

@Component({
    selector: 'learn-n-try-persistent-university',
    templateUrl: './learn_n_try_persistent_university.component.html',
    styleUrls: ['./learn_n_try_persistent_university.component.css'],
    providers: [learn_n_try_persistent_universityService]
})

export class learn_n_try_persistent_universityComponent {
    //2 way binding with [(ngModel)]="id" and [(ngModel)]="name"
    name:string="admin";
    id:number=1;
    constructor (private learn_n_try_persistent_universityService:learn_n_try_persistent_universityService){
        
    }
    puFromSubmit(formValueObj){
        console.log("From Component");
        console.log(formValueObj);
        this.learn_n_try_persistent_universityService.post(formValueObj);
    }
}