import Plant from "./Plant.js";
import Empty from "./Empty.js";
import Bush from "./Bush.js";
import Tree from "./Tree.js";

export default class Harvest extends Plant {
    constructor(stage, className) {
        super(stage, className);
        this.stage = stage;
        this.className = className;
        this.lifeCycleCounter = 0;
        this.rotCounter = 0;
    }

    //фрукты должны сгнивать через 4 хода
    rot(field) {
        let tmp = new Empty();
        tmp.x = this.x;
        tmp.y = this.y;
        field.matrix[this.x][this.y] = tmp;
        this.rotCounter++;
        field.harvest.splice(field.harvest.indexOf(this),1);
    }

    lifeCycle(field) {
        this.lifeCycleCounter++;

        if (this.lifeCycleCounter >= 4) {
            this.lifeCycleCounter = 0;
            this.rot(field);
        }
        if (this.rotCounter === 4) {
            this.initGrowing(field);
        }
    }

    initGrowing(field) {
        if (this.elem === ".") {
            let bush = new Bush(1, `bush`);
            bush.x = this.x;
            bush.y = this.y;
            field.matrix[this.x][this.y] = bush;
            field.bushes.push(bush);

        } else {
            let tree = new Tree(2, `tree`);
            tree.x = this.x;
            tree.y = this.y;
            field.matrix[this.x][this.y] = tree;
            field.trees.push(tree);
        }
    }
}