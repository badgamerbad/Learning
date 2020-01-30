let apples: number = 5;
let speed: string = "fast";
let hasName: boolean = true;

// let nothingMuch: null = null;
let nothing: undefined = undefined;

// built in objects
let now: Date = new Date();

// Array
let colors: string[] = ["red", 'green', `blue`];
let primaryColors: Array<string> = ["red", 'green', `blue`];

let numbersExamples: number[] = [1, 2, 3];
let truths: boolean[] = [true, false];

// classes
class Car {
  horsePower;
  price;
}
let car: Car = new Car();

// Object literal
let point: {x: number; y: number;} = {
  x: 10, y: 20,
}

// Function
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
}