import { Injectable } from '@angular/core';

import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {
  result: any;
  constructor(private _http: Http) { }
  getUsers(){
    return this._http.get("/api/users").map(result => this.result = result.json().data);
  };
  postUsers(name){
    var data = {
      name: name
    }
    return this._http.post("/api/users", data).map(result => this.result = result.json().data);
  };
  deleteUsers(index){
    var data = {
      index: index
    }
    return this._http.delete("/api/users/"+index).map(result => this.result = result.json().data);
  }
}
