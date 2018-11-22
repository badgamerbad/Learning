import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpErrorResponse, HttpRequest, HttpEventType, HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class appService {

  constructor(private _http: HttpClient) { }
  sychronousGet() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': window["foo"]? window["foo"] : "",
      })
    }
    return this._http.get('api/tasks', httpOptions)
  }
  sychronousPost(body) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': window["foo"]? window["foo"] : "",
      })
    }
    return this._http.post('api/tasks', body, httpOptions)
  }
  sychronousDelete(id) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': window["foo"]? window["foo"] : "",
      })
    }
    return this._http.delete(`api/tasks/${id}`, httpOptions)
  }
}
