import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpErrorResponse, HttpRequest, HttpEventType, HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class appService {

  constructor(private _http: HttpClient) { }
  sychronousGet() {
    return new Promise((resolve, reject) => {
      this._http.get('api/tasks').subscribe(
        res => resolve(res),
        err => reject(err)
      )
    })
  }
}
