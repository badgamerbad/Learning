import { Component } from '@angular/core';
//import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ LoginService ]
})
export class AppComponent {
  title = 'app';
  parentName = "James";
}
