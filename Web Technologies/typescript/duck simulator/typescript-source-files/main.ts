/* Main.ts */

/// <reference path="classes/subclasses/Decoy.ts" />
/// <reference path="classes/subclasses/Mallard.ts" />
/// <reference path="classes/subclasses/Redhead.ts" />
/// <reference path="classes/subclasses/Rubber.ts" />

let joey = new Decoy( new Fly.NoFly(), new Quack.MuteQuack(), "Joey" );
joey.display();
joey.performFly();
joey.performQuack();
joey.swim();