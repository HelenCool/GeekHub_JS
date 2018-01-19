import Harvest from "./Harvest.js";

export default class Berry extends Harvest {
    constructor(stage, className) {
        super(stage, className); // тут должно передаваться 4, `berry`
        this.elem = `.`;
    }
}

