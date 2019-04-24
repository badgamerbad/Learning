// import { FlyBehavior } from './../../interfaces/Fly';
/* Super Duck */

/// <reference path="../Duck.ts" />

class SuperDuck extends Duck {
    public display(): void {
        console.log(`My name is ${this.name}. I'am a Super Duck!!!`);
    }
}