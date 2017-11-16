"use strict";

function Animal(health, type, isHunter) {
    this.health = health;
    this.type = type;
    this.isHunter = isHunter || false;
    if (this.isHunter) {
        this.points = (Math.round(Math.random() * 100));
    } else {
        this.points = (Math.round(Math.random() * 10));
    }
}

function Predator(health, type, isHunter) {
    Animal.apply(this, arguments);
    Object.defineProperty(this, "health", {
        writable: false,
        configurable: false
    });
}

Predator.prototype = Object.create(Animal.prototype);

function Mouse() {
    Animal.apply(this, arguments);
}

Mouse.prototype = Object.create(Animal.prototype);
Mouse.prototype.constructor = Mouse;


function Deer() {
    Animal.apply(this, arguments);
}

Deer.prototype = Object.create(Animal.prototype);
Deer.prototype.constructor = Deer;


function Eagle() {
    Predator.apply(this, arguments);
}

Eagle.prototype = Object.create(Predator.prototype);
Eagle.prototype.constructor = Eagle;


function Human(health, type, isHunter) {
    Predator.apply(this, arguments);

}

Human.prototype = Object.create(Predator.prototype);
Human.prototype.constructor = Human;

Human.prototype.makeShot = function (obj) {
    var shot = obj.health - this.points;
    if (shot < 0) {
        console.log(obj.name + " is dead");
    }
    else console.log(obj.name + " is still alive");
}


function Hunter(health, type, isHunter) {
    Human.apply(this, arguments);
}

Hunter.prototype = Object.create(Human.prototype);
Hunter.prototype.constructor = Hunter;


function Aborigine(health, type, isHunter) {
    Human.apply(this, arguments);
}

Aborigine.prototype = Object.create(Human.prototype);
Aborigine.prototype.constructor = Aborigine;


var mouse = new Mouse(20, "victim");
mouse.name = "Mikkey";
var eagle = new Eagle(50, "predator");
eagle.name = "Jack the Eagle";
var deer = new Deer(80, "victim");
deer.name = "Bamby";
var hunter = new Hunter(100, "predator", true);
var aborigine = new Aborigine(100, "predator");


console.log("Hunter made a shot with " + hunter.points + " points");

hunter.makeShot(mouse);
hunter.makeShot(deer);
hunter.makeShot(eagle);

console.log("Aborigine made a shot with " + aborigine.points + " points");

aborigine.makeShot(mouse);
aborigine.makeShot(deer);
aborigine.makeShot(eagle);