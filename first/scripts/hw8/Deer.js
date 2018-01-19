import Animal from "./Animal.js";

export default class Deer extends Animal {
    constructor(health, fill, className) {
        super(health, fill, className);
        this.elem = '@';
        this.isEating = false;
        this.damage = 1;
    }

}
