import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpErrorResponse, HttpRequest, HttpEventType, HttpResponse } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'token'
  })
}

@Injectable({
  providedIn: 'root'
})
export class appService {

  constructor(private _http: HttpClient) { }
  sychronousGet() {
    return this._http.get('api/tasks')
  }
  sychronousPost(body) {
    return this._http.post('api/tasks', body)
  }
  sychronousDelete(id) {
    return this._http.delete(`api/tasks/${id}`, httpOptions)
  }
}
