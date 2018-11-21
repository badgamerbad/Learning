import { Component } from '@angular/core';

import { appService } from './app.service';

import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  taskForm = {
    name: "",
    type: "",
  }
  tasks; task; err;
  id;
  foos = [1, 2, 4,5,6]
  constructor(private _appService: appService, private meta: Meta) {
    this.meta.addTag({name: "google-signin-client_id", content: "776654150542-ca4q9ioshln2cs1dqcvaqiqk8ms4bvhl.apps.googleusercontent.com"});
  }
  getTasks() {
    this._appService.sychronousGet().subscribe(
      res => this.tasks = res,
      err => this.err = err
    )
  }
  postTasks() {
    let body = {
      name: this.taskForm.name,
      type: this.taskForm.type
    }
    this._appService.sychronousPost(body).subscribe(
      res => this.task = res,
      err => this.err = err
    )
  }
  deleteTask(id) {
    this._appService.sychronousDelete(id).subscribe(
      res => this.task = res,
      err => this.err = err
    )
  }
}
