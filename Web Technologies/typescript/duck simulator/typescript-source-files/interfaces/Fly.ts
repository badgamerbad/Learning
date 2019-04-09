module Fly {
    export interface FlyBehavior {
        fly(): void;
    }
    export class FlyWithWings implements FlyBehavior {
        public fly(): void {
            return console.log("I'm flying!!");
        }
    }
    export class NoFly implements FlyBehavior {
        public fly(): void {
            return console.log("I can't fly!!");
        }
    }
}