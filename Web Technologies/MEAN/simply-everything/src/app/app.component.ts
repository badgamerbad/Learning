import { Component } from '@angular/core';

import { appService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private _appService: appService) {}
  getTasks() {
    this._appService.sychronousGet();
  }
  postTask() {

  }
}
