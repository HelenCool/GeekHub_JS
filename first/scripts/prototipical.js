var animal = {
    canWalk: function () {
        canWalk = true;
    },
    canJump: function () {
       if (hight > 0) this.canJump;
    }
};

function Mouse (name, food, sound) {
    this.name  = name;
    this.food = food;
    this.sound = sound;
    this.health = 10;
};

Mouse.prototype = animal;
var mouse = new Mouse ("Mickey", "corn", "pipipi")

function Eagle (){
  this.isPredator = true;
  this.health = 60;
};

Eagle.prototype = animal;
var eagle = new Eagle();

function Deer (){
    this.isPredator = false;
    this.health = 80;
};
Deer.prototype = animal;
var deer = new Deer();

function Human (){

};
Human.prototype = animal;
var human = new Human();


function Hunter (){
    this.isPredator = false;
    this.isHunter = true;
    this.health = 100;
};
Hunter.prototype = human;
var hunter = new Hunter();

function Aborigine (){
    this.isPredator = false;
    this.isHunter = false;
    this.health = 100;
};

Aborigine.prototype = human;
var aborigine = new Aborigine();


var shot = function (obj){
    var points = (Math.round(Math.random()))*100;
    return points;
};

function hunterMakeShot(obj) {
    shot(hunter);
    obj.health = obj.health - obj.points;
    if (obj.health < 0) console.log(obj = " is dead");
};

console.log(hunter.points);
var killMouse = hunterMakeShot.bind(mouse);
killMouse(mouse);
var killDeer = hunterMakeShot.bind(deer);
killDeer(deer);
var killEagle = hunterMakeShot.bind(eagle);
killEagle(eagle);
