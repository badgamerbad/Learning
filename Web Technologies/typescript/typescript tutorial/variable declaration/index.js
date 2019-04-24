var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
var _a;
var max = 10;
var _loop_1 = function (i) {
    var arr = [];
    setTimeout(function () {
        arr.push(i);
        if (i == max - 1)
            console.log("setimeout array " + arr);
    }, 100 * i);
};
for (var i = 0; i < max; i++) {
    _loop_1(i);
}
var input = [1, 3, 4];
var first = input[0], second = input[1];
_a = [second, first], first = _a[0], second = _a[1];
get_array([first, second]);
function get_array(_a) {
    var first = _a[0], second = _a[1];
    console.log("get_array first: " + first + ", second:  " + second);
}
//object destructuring
var o = {
    a: "foo",
    b: 12,
    c: "bar"
};
var newA = o.a, newB = o.b;
console.log("new A : " + newA + " new B : " + newB);
get_object(o);
function get_object(_a) {
    var a = _a.a, b = __rest(_a, ["a"]);
    console.log("a : " + a + " b : " + b.b + ", " + b.c);
}
//default values
function keepWholeObject(wholeObject) {
    var a = wholeObject.a, _a = wholeObject.b, b = _a === void 0 ? 1001 : _a;
    console.log("keepWholeObject a: " + a + ", b: " + b);
}
keepWholeObject({ a: "foo", b: 1002 });
function type(_a) {
    var a = _a.a, _b = _a.b, b = _b === void 0 ? 1000 : _b;
    console.log("function type a: " + a + " b: " + b);
}
type({ a: "foo", b: 1002 });
function f(_a) {
    var _b = _a === void 0 ? { a: "string" } : _a, a = _b.a, _c = _b.b, b = _c === void 0 ? 0 : _c;
    console.log("function f a: " + a + ", b: " + b);
}
f();
f({ a: "foo", b: 9 });
//spread operator
var defaults = { food: "spicy", price: "$$", ambience: "noisy" };
var search = __assign({ food: "rich" }, defaults);
console.log("search object with spread operator " + search.food);
var Spread = /** @class */ (function () {
    function Spread() {
        this.p = 12;
        this.x = function () {
        };
    }
    Spread.prototype.m = function () {
    };
    return Spread;
}());
var s = new Spread();
var clone = __assign({}, s);
console.log("cloning with spread clone.m: " + clone.x);
