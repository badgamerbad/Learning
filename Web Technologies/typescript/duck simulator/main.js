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
System.register("interfaces/Quack", [], function (exports_1, context_1) {
    "use strict";
    var Quack;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
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
            exports_1("Quack", Quack);
        }
    };
});
System.register("interfaces/Fly", [], function (exports_2, context_2) {
    "use strict";
    var Fly;
    var __moduleName = context_2 && context_2.id;
    return {
        setters: [],
        execute: function () {
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
            exports_2("Fly", Fly);
        }
    };
});
System.register("classes/Duck", [], function (exports_3, context_3) {
    "use strict";
    var Duck;
    var __moduleName = context_3 && context_3.id;
    return {
        setters: [],
        execute: function () {
            Duck = /** @class */ (function () {
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
            exports_3("default", Duck);
        }
    };
});
System.register("classes/subclasses/Decoy", ["classes/Duck"], function (exports_4, context_4) {
    "use strict";
    var Duck_1, Decoy;
    var __moduleName = context_4 && context_4.id;
    return {
        setters: [
            function (Duck_1_1) {
                Duck_1 = Duck_1_1;
            }
        ],
        execute: function () {
            Decoy = /** @class */ (function (_super) {
                __extends(Decoy, _super);
                function Decoy() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                Decoy.prototype.display = function () {
                    return console.log("My name is " + this.name + ". I'am a Decoy Duck!!!");
                };
                return Decoy;
            }(Duck_1["default"]));
            exports_4("Decoy", Decoy);
        }
    };
});
System.register("main", ["interfaces/Quack", "classes/subclasses/Decoy", "interfaces/Fly"], function (exports_5, context_5) {
    "use strict";
    var Quack_2, Decoy_1, Fly_1, joey;
    var __moduleName = context_5 && context_5.id;
    return {
        setters: [
            function (Quack_2_1) {
                Quack_2 = Quack_2_1;
            },
            function (Decoy_1_1) {
                Decoy_1 = Decoy_1_1;
            },
            function (Fly_1_1) {
                Fly_1 = Fly_1_1;
            }
        ],
        execute: function () {
            joey = new Decoy_1.Decoy(new Fly_1.Fly.NoFly(), new Quack_2.Quack.MuteQuack(), "Joey");
            joey.display();
            joey.performFly();
            joey.performQuack();
            joey.swim();
        }
    };
});
