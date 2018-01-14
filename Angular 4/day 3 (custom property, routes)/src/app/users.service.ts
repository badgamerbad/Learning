import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class UsersService {
    //injecting service within service
    constructor(private http:HttpClient){

    }
    getUsers():Observable<any>{
        return this.http.get('https://jsonplaceholder.typicode.com/users');
    }
    postUser(newUser:any){
        return this.http.post('https://jsonplaceholder.typicode.com/users', { user:newUser });
    }
}