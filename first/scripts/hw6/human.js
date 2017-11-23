import {Animal} from "./animal";

export class Human extends Animal {
    makeShot(obj){
        let shot = obj.health - this.points;
        if (shot < 0) {
            console.log(obj.name + " is dead");
        }
        else console.log(obj.name + " is still alive");
    }
};