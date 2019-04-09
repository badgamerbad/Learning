/* Duck.ts */

/// <reference path="../interfaces/Fly.ts" />
/// <reference path="../interfaces/Quack.ts" />

abstract class Duck {
    private flyBehavior: Fly.FlyBehavior;
    private quackBehavior: Quack.QuackBehavior;

    public performFly(): void {
        this.flyBehavior.fly();
    }
    public performQuack(): void {
        this.quackBehavior.quack();
    }
    public swim(): void {
        return console.log( "I can either swim or float!!!" );
    }
    abstract display(): void;
    constructor( flybehavior: Fly.FlyBehavior, quackbehavior: Quack.QuackBehavior, public name: string = "Anonymous Duck" ) {
        this.flyBehavior = flybehavior;
        this.quackBehavior = quackbehavior;
    }
}