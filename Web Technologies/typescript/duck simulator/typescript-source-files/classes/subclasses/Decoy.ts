/* Decoy.ts */

/// <reference path="../Duck.ts" />

class Decoy extends Duck {
    public display(): void {
        return console.log( `My name is ${this.name}. I'am a Decoy Duck!!!` );
    }
}