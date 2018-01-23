import Plant from "./Plant.js";

export default class Tree extends Plant {
    constructor(stage, className) {
        super(stage, className);
        this.elem = `&#127795`;
    }

    //функция поедания дерева
    decreasing(damage) {
        super.decreasing(damage);
        if (this.stage === 1) {
            this.className = `treeWithoutLeaves`;
            this.elem = `|`;
        }
    }
}
