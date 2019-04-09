/* Rubber.ts */

/// <reference path="../Duck.ts" />

class Rubber extends Duck {
    public display(): void {
        return console.log( `My name is ${this.name}. I'am a Rubber Duck!!!` );
    }
}