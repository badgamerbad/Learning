import { Quack } from './interfaces/Quack';
import { Decoy } from './classes/subclasses/Decoy';
import { Fly } from './interfaces/Fly';

let joey = new Decoy( new Fly.NoFly(), new Quack.MuteQuack(), "Joey" );
joey.display();
joey.performFly();
joey.performQuack();
joey.swim();