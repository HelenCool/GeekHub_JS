"use strict";

class Animal {

    constructor(health, type) {
        this.health = health;
        this.type = type;
    }
}

let myWeakMap = new WeakMap();
let animal = new Animal(100, "predator");

let AnimalProxy = new Proxy(Animal, {
    construct: function (target, argumentsList) {
        myWeakMap.set(animal, argumentsList);
        return new target(...argumentsList);
    }
});
let animal2 = new AnimalProxy(100, "predator");
console.log(myWeakMap);
