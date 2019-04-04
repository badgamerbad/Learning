interface Person {
    firstName: string;
    lastName: string;
}

class Student {
    fullname: string;
    constructor (public firstName, public middleInitial, public lastName) {
        this.fullname = `${firstName} ${middleInitial} ${lastName}`; 
    }
}

function greeter(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

var user = new Student( "Jane",  "M.", "User" );

document.body.innerHTML = greeter(user);