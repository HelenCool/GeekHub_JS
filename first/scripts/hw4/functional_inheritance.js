
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

    function makeShot(obj1, obj2) {
        makeShot.bind(this, arguments);
        var hp = obj1.health;
        var power = obj2.points;
        var shot = hp - power;
        if (shot < 0){
            console.log(obj1.name + " is dead");
        }
        else console.log(obj1.name + " is still alive");
    }
}

function Mouse (health, type, isHunter){
    Animal.apply(this, arguments);
    this.isVictim = function () {
        this.victim = true;
    };
};

function Eagle (){
    Animal.apply(this, arguments);
    this.food = "mice";
    this.movement = function () {
        (hight > 0) ? this.movement = "fly" : "go";
    }
};

function Deer (){
    Animal.apply(this, arguments);
    this.isVictim = function () {
        this.victim = true;
    };
    this.hunter = "humen";

};
function Human (){
    Animal.apply(this, arguments);
    this.victims = "deers";

};
function Hunter (){
    Human.apply(this, arguments);
    this.hasWeapon = function () {
        this.armed = true;
    }
};

function Aborigine (){
    Human.apply(this, arguments);
    this.hasWeapon = function () {
        this.armed = false;
    }
};

var mouse = new Mouse("Mikkey", "corns");
var eagle = new Eagle();
var deer = new Deer();
var human = new Human();
var hunter = new Hunter("Walt");
var aborigine = new Aborigine("Sam");

console.log(mouse,eagle, deer, human,hunter, aborigine);
