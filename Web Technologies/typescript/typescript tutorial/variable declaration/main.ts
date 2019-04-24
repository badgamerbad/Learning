const max = 10;
for ( let i = 0; i < max; i++ ) {
    let arr = []
    setTimeout( () => { 
        arr.push(i);
        if(i == max-1)
            console.log(`setimeout array ${arr}`)
    }, 100 * i );
}

let input = [1, 3, 4];
let [first, second] = input;
[first, second] = [second, first];
get_array([first, second])

function get_array([first, second]: [number, number]) {
    console.log(`get_array first: ${first}, second:  ${second}`)
}

//object destructuring
let o = {
    a: "foo",
    b: 12,
    c: "bar",
};

let {a: newA, b: newB} = o;
console.log(`new A : ${newA} new B : ${newB}`)
get_object(o)
function get_object({a, ...b}: { a: string, b: number, c: string }) {
    console.log(`a : ${a} b : ${b.b}, ${b.c}`)
}

//default values
function keepWholeObject(wholeObject: { a: string, b?: number }) {
    let { a, b = 1001 } = wholeObject;
    console.log(`keepWholeObject a: ${a}, b: ${b}`);
}
keepWholeObject({a: "foo", b: 1002});

//functions declaration
type C = { a: string, b?: number }
function type({a, b = 1000}: C) {
    console.log(`function type a: ${a} b: ${b}`);
}
type({a:"foo", b: 1002})

function f({a, b = 0} = { a: "string" }): void {
    console.log(`function f a: ${a}, b: ${b}`);
}
f();
f({a: "foo", b: 9});

//spread operator
let defaults = { food: "spicy", price: "$$", ambience: "noisy" };
let search = { food: "rich", ...defaults };
console.log(`search object with spread operator ${search.food}`)

class Spread {
    p = 12;
    x = function() {
        
    };
    m() {

    }
}
let s = new Spread();
let clone = { ...s };
console.log(`cloning with spread clone.m: ${clone.x}`)