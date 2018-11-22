import { Component, OnInit } from '@angular/core';
// import { GlobalRef } from 'src/global-ref';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  foo;
  constructor() {
    this.foo = window["foo"];
    console.log('-----------------------------------------foo--------------------------------')
    console.log(this.foo);
  }
  ngOnInit() {
  }
  getFoo(){
    console.log('--------------------------------------get-foo--------------------------------')
    console.log(window["foo"]);
  }
}
