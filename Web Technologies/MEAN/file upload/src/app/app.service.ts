import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';

import { Result } from './result.interface';
import { Observable } from 'rxjs/Observable';

import { _throw } from 'rxjs/observable/throw';

const httpOptions = {
    headers: new HttpHeaders({
        
    })
}

@Injectable()
export class appService {
    result: any;
    private handleError(error: HttpErrorResponse){
        if(error.error && error.error instanceof ErrorEvent){
            console.error('An error occurred:', error.error.message);
        }
        else{
            console.error(
                `Backend returned code ${error.status}, ` +
                `body was: ${error.error}`);
        }
        return _throw({
            message: error.message,
            status: error.status,
            statusText: error.statusText,
            url: error.url
        });
    }
    constructor(private _http: HttpClient){}
    asynchronousGet(url):Observable<any>{
        return this._http.get(url).pipe(
            catchError(this.handleError)
        );
    };
    synchronousGet(url):Promise<any>{
        return new Promise((resolve, reject) => {
            this._http.get(url).subscribe(
                res => resolve(res),
                error => reject(error)
            )
        })
    }  
    asynchronousPost(url, formData):Observable<any>{
        return this._http.post(url, formData).pipe(
            catchError(this.handleError)
        )
    }
    synchronousPost(url, formData):Promise<any>{
        return new Promise((resolve, reject) => {
            this._http.post(url, formData).subscribe(
                res => resolve(res),
                error => reject(error)
            );
        })
    }
}