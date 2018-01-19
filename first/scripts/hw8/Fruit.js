import Harvest from "./Harvest.js";

export default class Fruit extends Harvest {
    constructor(stage, className) {
        super(stage, className); //тут должно передаваться 6, `fruit`
        this.elem = `o`;
    }
}
