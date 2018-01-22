import Animal from "./Animal.js";

export default class Deer extends Animal {
    constructor(health, satiety, className) {
        super(health, satiety, className);
        this.elem = `&#129420`;
        this.isEating = false;
        this.damage = 1;
    }

}
