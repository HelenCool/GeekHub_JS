import Animal from "./Animal.js";

export default class Mouse extends Animal {
    constructor(health, fill, className) {
        super(health, fill, className);
        this.elem = '0';
        this.isEating = false;
        this.damage = 0.25;
    }

}
