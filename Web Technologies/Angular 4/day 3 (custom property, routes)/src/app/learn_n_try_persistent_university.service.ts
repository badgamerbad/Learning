import { Injectable } from '@angular/core';

import { learn_n_try_persistent_universityObj } from './learn_n_try_persistent_university';

@Injectable()
export class learn_n_try_persistent_universityService {
    userList:Array<learn_n_try_persistent_universityObj>;
    constructor(){
        console.log('ProductsService called');
        this.userList = new Array<learn_n_try_persistent_universityObj>();
    }
    post(obj){
        console.log("From Service");
        console.log(obj);
        this.userList.push(new learn_n_try_persistent_universityObj(obj.userName, obj.userId));
    }
}