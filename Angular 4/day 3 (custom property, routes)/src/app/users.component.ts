import { Component } from '@angular/core';
import { UsersService } from './users.service';
import { User } from './user';

@Component({
    selector: 'users',
    template: `
        <h2>List of Users</h2>
        <table border="1">
            <thead>
                <th>Name</th>
                <th>Username</th>
                <th>Email</th>
                <th>Phone</th>
            </thead>
            <tbody>
                <tr *ngFor="let user of userList">
                    <td><a [routerLink]="['userdetails', user.name]">{{user.name}}</a></td>
                    <td>{{user.username}}</td>
                    <td>{{user.email}}</td>
                    <td>{{user.phone}}</td>
                </tr>
            </tbody>
        </table>
        <br>
        <router-outlet></router-outlet>
        <!-- <h2>Add new user</h2>
        <form #addUserForm="ngForm" (ngSubmit)="postForm(addUserForm.value)">
            Name: <input type="text" name="name" #name="ngModel" ngModel><br>
            User Name: <input type="text" name="username" #username="ngModel" ngModel><br>
            Email: <input type="text" name="email"><br>
            Phone: <input type="text" name="phone"><br>
            <button type="submit">Submit</button>
        </form>
        <br>
        Name from users.component {{name}}
        <br>
        User Name from users.component {{username}} -->
    `,
    providers: [ UsersService ]
})

export class usersComponent {
    userList:any;
    name:string;
    username:string;
    constructor(private userService:UsersService) {
        this.userService.getUsers().subscribe(res=>{
            this.userList = res;
        });
    }
    postForm(formObj:any) {
        this.userService.postUser(formObj).subscribe(res=>{
            console.log("New user Added");
            this.userList.push(formObj);
        })
    }
}