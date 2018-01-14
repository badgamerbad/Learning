import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Injectable()

export class LoginService {
    nameSubj:Subject<string> = new Subject<string>();

    setUsername(username:string){
        this.nameSubj.next(username);
    }
    getUsername():Observable<string>{
        return this.nameSubj.asObservable();
    }
}