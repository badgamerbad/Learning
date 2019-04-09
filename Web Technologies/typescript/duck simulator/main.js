var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Fly;
(function (Fly) {
    var FlyWithWings = /** @class */ (function () {
        function FlyWithWings() {
        }
        FlyWithWings.prototype.fly = function () {
            return console.log("I'm flying!!");
        };
        return FlyWithWings;
    }());
    Fly.FlyWithWings = FlyWithWings;
    var NoFly = /** @class */ (function () {
        function NoFly() {
        }
        NoFly.prototype.fly = function () {
            return console.log("I can't fly!!");
        };
        return NoFly;
    }());
    Fly.NoFly = NoFly;
})(Fly || (Fly = {}));
var Quack;
(function (Quack_1) {
    var Quack = /** @class */ (function () {
        function Quack() {
        }
        Quack.prototype.quack = function () {
            return console.log("I'm quacking!!");
        };
        return Quack;
    }());
    Quack_1.Quack = Quack;
    var Squeak = /** @class */ (function () {
        function Squeak() {
        }
        Squeak.prototype.quack = function () {
            return console.log("I'm squeaking!!");
        };
        return Squeak;
    }());
    Quack_1.Squeak = Squeak;
    var MuteQuack = /** @class */ (function () {
        function MuteQuack() {
        }
        MuteQuack.prototype.quack = function () {
            return console.log("I don't quack!!");
        };
        return MuteQuack;
    }());
    Quack_1.MuteQuack = MuteQuack;
})(Quack || (Quack = {}));
/* Duck.ts */
/// <reference path="../interfaces/Fly.ts" />
/// <reference path="../interfaces/Quack.ts" />
var Duck = /** @class */ (function () {
    function Duck(flybehavior, quackbehavior, name) {
        if (name === void 0) { name = "Anonymous Duck"; }
        this.name = name;
        this.flyBehavior = flybehavior;
        this.quackBehavior = quackbehavior;
    }
    Duck.prototype.performFly = function () {
        this.flyBehavior.fly();
    };
    Duck.prototype.performQuack = function () {
        this.quackBehavior.quack();
    };
    Duck.prototype.swim = function () {
        return console.log("I can either swim or float!!!");
    };
    return Duck;
}());
/* Decoy.ts */
/// <reference path="../Duck.ts" />
var Decoy = /** @class */ (function (_super) {
    __extends(Decoy, _super);
    function Decoy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Decoy.prototype.display = function () {
        return console.log("My name is " + this.name + ". I'am a Decoy Duck!!!");
    };
    return Decoy;
}(Duck));
/* Mallard.ts */
/// <reference path="../Duck.ts" />
var Mallard = /** @class */ (function (_super) {
    __extends(Mallard, _super);
    function Mallard() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Mallard.prototype.display = function () {
        return console.log("My name is " + this.name + ". I'am a Mallard Duck!!!");
    };
    return Mallard;
}(Duck));
/* Redhead.ts */
/// <reference path="../Duck.ts" />
var Redhead = /** @class */ (function (_super) {
    __extends(Redhead, _super);
    function Redhead() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Redhead.prototype.display = function () {
        return console.log("My name is " + this.name + ". I'am a Redhead Duck!!!");
    };
    return Redhead;
}(Duck));
/* Rubber.ts */
/// <reference path="../Duck.ts" />
var Rubber = /** @class */ (function (_super) {
    __extends(Rubber, _super);
    function Rubber() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Rubber.prototype.display = function () {
        return console.log("My name is " + this.name + ". I'am a Rubber Duck!!!");
    };
    return Rubber;
}(Duck));
/* Main.ts */
/// <reference path="classes/subclasses/Decoy.ts" />
/// <reference path="classes/subclasses/Mallard.ts" />
/// <reference path="classes/subclasses/Redhead.ts" />
/// <reference path="classes/subclasses/Rubber.ts" />
var joey = new Decoy(new Fly.NoFly(), new Quack.MuteQuack(), "Joey");
joey.display();
joey.performFly();
joey.performQuack();
joey.swim();
