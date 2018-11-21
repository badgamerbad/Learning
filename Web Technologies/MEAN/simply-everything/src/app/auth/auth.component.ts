import { Component, OnInit } from '@angular/core';
// import { GlobalRef } from 'src/global-ref';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  data;
  // constructor(_global: GlobalRef) {
  constructor() {
    // this.data = _global.nativeGlobal.DATA;
    this.data = window;
  }

  ngOnInit() {
  }
}
