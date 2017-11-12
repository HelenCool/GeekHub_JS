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

function Mouse(){
    Animal.apply(this, arguments);
}
Mouse.prototype = Object.create(Animal.prototype);
Mouse.prototype.constructor = Mouse;


function Deer(){
    Animal.apply(this, arguments);
}
Deer.prototype = Object.create(Animal.prototype);
Deer.prototype.constructor = Deer;


function Eagle(){
    Animal.apply(this, arguments);
}
Eagle.prototype = Object.create(Animal.prototype);
Eagle.prototype.constructor = Eagle;


function Human(health, type, isHunter){
    Animal.apply(this, arguments);
    this.health =  100;
    this.type= "predator";
    this.isHunter = isHunter;

}
Human.prototype = Object.create(Animal.prototype);
Human.prototype.constructor = Human;


function Hunter(health, type, isHunter){
    Human.apply(this, arguments);
    this.isHunter = true;
    // this.points = (Math.round(Math.random()*100));
}
Hunter.prototype = Object.create(Human.prototype);
Hunter.prototype.constructor = Hunter;


function Aborigine(health, type, isHunter){
    Human.apply(this, arguments);
    this.isHunter = false;
}
Aborigine.prototype = Object.create(Human.prototype);
Aborigine.prototype.constructor = Aborigine;


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

var mouse = new Mouse(20, "victim");
mouse.name = "Mikkey";
var eagle = new Eagle(50, "predator");
eagle.name = "Jack the Eagle";
var deer = new Deer(80, "victim");
deer.name = "Bamby";
var hunter = new  Hunter("", "", true);
var aborigine = new Aborigine();



console.log("Hunter made a shot with " + hunter.points + " points");

makeShot(mouse, hunter);
makeShot(deer, hunter);
makeShot(eagle, hunter);

console.log("Aborigine made a shot with " + aborigine.points + " points");

makeShot(mouse, aborigine);
makeShot(deer, aborigine);
makeShot(eagle, aborigine);