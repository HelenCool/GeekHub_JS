/*--------functional inheritance----------*/
"use strict";

function Animal(health, type, isHunter) {
    var self = this;
    self.health = health;
    self.type = type;
    self.isHunter = isHunter || false;
    if (isHunter) {
        self.points = (Math.round(Math.random() * 100));
    }
    else self.points = (Math.round(Math.random() * 10));

}

function Mouse(health, type) {
    Animal.apply(this, arguments);
    this.name = "Mikkey";
}

function Eagle(health, type) {
    this.name = "Jack the Eagle";
    Animal.apply(this, arguments);
}

function Deer(health, type) {
    Animal.apply(this, arguments);
    this.name = "Bamby";
}

function Human(health, type, isHunter) {
    Animal.apply(this, arguments);
    this.isHunter = isHunter;
    this.makeShot = function (obj) {
        var shot = obj.health - this.points;
        if (shot < 0) {
            console.log(obj.name + " is dead");
        } else {
            console.log(obj.name + " is still alive");
        }
        if (obj.type === "predator") {
            Object.defineProperty(obj, "health", {
                writable: false,
                configurable: false
            });
        }
    }
}

function Hunter(health, type, isHunter) {
    Human.apply(this, arguments);
    this.isHunter = true;
    var hunterMakeShot = this.makeShot;
    this.makeShot = function (obj) {
        hunterMakeShot.apply(this, arguments);
    }
}

function Aborigine(health, type, isHunter) {
    Human.apply(this, arguments);
    this.isHunter = false;
    var aborigineMakeShot = this.makeShot;
    this.makeShot = function () {
        aborigineMakeShot.apply(this, arguments);
    }
}

var mouse = new Mouse(20, "victim");
var eagle = new Eagle(50, "predator");
var deer = new Deer(80, "victim");
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
