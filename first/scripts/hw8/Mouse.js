import Animal from "./Animal.js";

export default class Mouse extends Animal {
    constructor(health, satiety, className) {
        super(health, satiety, className);
        this.elem = '&#128045';
        this.isEating = false;
        this.damage = 0.25;
    }

}
