import { Component } from '@angular/core';

import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users: Array<any>;
  name = "";
  constructor(private _dataService: DataService){
    this._dataService.getUsers().subscribe(res => this.users = res);
  }
  postUsers(){
    if(this.name != ""){
      this._dataService.postUsers(this.name).subscribe(res => res);
      this._dataService.getUsers().subscribe(res => this.users = res);
      this.name = "";
    }
  }
  deleteUsers(index){
    this._dataService.deleteUsers(index).subscribe(res => res);
    this._dataService.getUsers().subscribe(res => this.users = res);
  }
}
