/* Mallard.ts */

/// <reference path="../Duck.ts" />

class Mallard extends Duck {
    public display(): void {
        return console.log( `My name is ${this.name}. I'am a Mallard Duck!!!` );
    }
}