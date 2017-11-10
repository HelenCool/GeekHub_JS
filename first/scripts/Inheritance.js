
/*--------functional inheritance----------*/
function Animal(name, food) {
    this.isVictim = function(){
        this.victim = false;
    };
    this.isAlive = function(){
        this.alive = true;
    };
    this.move = true;
    this.name = name;
    this.food = food;
};

function Mouse (){
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
