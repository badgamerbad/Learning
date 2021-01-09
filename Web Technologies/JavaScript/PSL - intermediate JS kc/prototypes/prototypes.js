function Employee(role) {
    this.role = role;
}

Employee.prototype.getRole = function () {
    return this.role;
}

var e1 = new Employee('dev');
var e2 = new Employee('tester');
var e3 = new Employee('manager');

console.log(e1.getRole());
console.log(e2.getRole());
console.log(e3.getRole());

function Employee(role) {
    this.getRole = function () {
        return "1";
    }
}
Employee.prototype.getRole = function () {    // shared item between object instances needs to be put in prototype
    return "2";
}
console.log(new Employee().getRole())

function GrandParent() {
    this.land = "plot a"
}

function Parent() {
    GrandParent.call(this);
    this.address = "b'lore";
}

function Child() {
    // like a super - or called as constructor stealing
    Parent.call(this);
}

console.log(new Child().address);   // b'lore