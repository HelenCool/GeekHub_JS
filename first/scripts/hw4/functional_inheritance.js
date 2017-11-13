
/*--------functional inheritance----------*/
"use strict";
function Animal(health, type, isHunter){
    this.health = health;
    this.type = type;
    this.isHunter = isHunter;
    if (this.type === "predator"){
        Object.defineProperty(this, "health",{
            writable: false,
            configurable: false
        });
    }
    if (isHunter){
        this.points = (Math.round(Math.random()*100));
    }
    else this.points = (Math.round(Math.random()*10));

}

function Mouse (health, type){
    Animal.apply(this, arguments);
    this.name = "Mikkey";
    this.health = 20;
    this.type = "victim";
}

function Eagle (health, type){
    Animal.apply(this, arguments);
    this.name = "Jack the Eagle";
    this.health = 50;
    this.type = "predator";
}

function Deer (health, type){
    Animal.apply(this, arguments);
    this.name = "Bamby";
    this.health = 80;
    this.type = "victim";

}

function Human (health, type, isHunter){
    Animal.apply(self, arguments);
    this.health = 100;
    this.type = "predator";
    this.isHunter = isHunter;
    this.makeShot = function(obj) {
        makeShot.bind(this, arguments);
        var shot = obj.health - this.points;
        if (shot < 0){
            console.log(obj.name + " is dead");
        }
        else console.log(obj.name + " is still alive");
    }
}

function Hunter (health, type, isHunter){
    Human.apply(this, arguments);
    this.isHunter = true;
    var hunterMakeShot = this.makeShot;
    this.makeShot = function(obj){
        hunterMakeShot.call(this);
    }
}

function Aborigine (health, type, isHunter){
    Human.apply(this, arguments);
    this.isHunter = false;
    var aborigineMakeShot = this.makeShot;
    this.makeShot = function(){
        aborigineMakeShot.call(this);
    }
}

var mouse = new Mouse();
var eagle = new Eagle();
var deer = new Deer();
var human = new Human();
var hunter = new Hunter("","", true);
var aborigine = new Aborigine();

console.log(mouse,eagle, deer, human,hunter, aborigine);

console.log("Hunter made a shot with " + hunter.points + " points");

hunter.makeShot(mouse);
hunter.makeShot(deer);
hunter.makeShot(eagle);

console.log("Aborigine made a shot with " + aborigine.points + " points");

aborigine.makeShot(mouse);
aborigine.makeShot(deer);
aborigine.makeShot(eagle);
