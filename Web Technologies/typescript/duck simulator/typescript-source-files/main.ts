/* Main.ts */

/// <reference path="classes/subclasses/Decoy.ts" />
/// <reference path="classes/subclasses/Mallard.ts" />
/// <reference path="classes/subclasses/Redhead.ts" />
/// <reference path="classes/subclasses/Rubber.ts" />

/// <reference path="classes/subclasses/SuperDuck.ts" />

let joey = new Decoy( new Fly.NoFly(), new Quack.MuteQuack(), "Joey" );
joey.display();
joey.performFly();
joey.performQuack();
joey.swim();

let rocky = new SuperDuck( new Fly.NoFly, new Quack.MuteQuack(), "Zero Duck" );
rocky.display();
rocky.performFly();
rocky.performQuack();
rocky.swim();

rocky.setFlyBehavior( new Fly.FlyRocketPowered );
rocky.performFly();