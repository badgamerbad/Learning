import { Component } from '@angular/core';

@Component({
    selector: 'users',
    template: `<h2>List of Users </h2>
                <table border="1">
                <thead>
                <th>Name</th><th>Username</th><th>Email</th><th>Phone</th>
                </thead>
                <tr *ngFor="let user of userList">
                <td>{{user.name}}</td>
                <td>{{user.username}}</td>
                <td>{{user.email}}</td>
                <td>{{user.phone}}</td>
                </tr>
                </table>
                <h2>Add New User</h2>
                <form (ngSubmit)="postForm(userform.value)">
                Name: <input type="text" name="name" ngModel/><br/>
                Username: <input type="text" name="username" ngModel/><br/>
                Email: <input type="email" name="email" ngModel/><br/>
                Phone: <input type="text" name="phone" ngModel/><br/>
                <input type="submit" value="Submit"/>
                </form>
    `,
    styles: [``]
   
})
export class UsersComponent{
    userList:any;
    
    constructor() { 
        
    }
}
