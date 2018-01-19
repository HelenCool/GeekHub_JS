import Plant from "./Plant.js";

export default class Bush extends Plant {
    constructor(stage, className) {
        super(stage, className);
        this.elem = `*`;
        this.maxLvl = 2;
    }

    //функция роста куста
    growth() {
        if (this.stage !== this.maxLvl && !this.isBeingEaten) {
            this.stage++;
            this.className = `bush2`;
        }
    }

}
