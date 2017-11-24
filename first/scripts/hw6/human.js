import Animal from "./animal.js";

export default class Human extends Animal {
    makeShot(obj) {
        let shot = obj.health - this.points;
        if (shot < 0) {
            console.log(obj.name + " is dead");
        } else {
            console.log(obj.name + " is still alive");
        }
    }
};