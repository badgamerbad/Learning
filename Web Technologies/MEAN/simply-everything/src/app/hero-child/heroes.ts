import {Hero} from './hero';
export class HEROES {
    heroes;
    constructor(){
        this.heroes = [];
        this.heroes.push(new Hero(0, "Mr IQ"));
        this.heroes.push(new Hero(1, "Magneta"));
        this.heroes.push(new Hero(2, "Bombasto"));
        console.log(this.heroes)
    }
}