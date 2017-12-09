export class Plant {
    constructor(stage, className, x, y) {
        this.isBeingEaten = false;
        this.stage = stage;
        this.className = className;
        this.position = {
            x: ``,
            y: ``
        };

    }
}

export class Tree extends Plant {
    constructor() {
        super(3, `tree`);
        this.elem = `&#5833`;
    }

    decreasing() {//функция поедания дерева
        console.log(this.stage);
        this.stage--;
        if (this.stage === 1) {
            this.className = `treeWithoutLeaves`;
            this.elem = `|`;
            console.log(this.stage);
        }
        if (this.stage === 0) {
            this.elem = `__`;
            this.className = `empty`;
        }
    }
}

export class Bush extends Plant {
    constructor() {
        super(1, `bush`);
        this.elem = `*`;
        this.maxLvl = 2;
    }

    growth() { //функция роста куста
        if (this.stage !== this.maxLvl && !this.isBeingEaten) {
            this.stage++;
            this.className = `bush2`;
        }
    }

    decreasing() { //функция поедания куста
        if (this.stage !== 0) {
            this.stage--;
            this.isBeingEaten = true;
        }
        else {
            this.elem = `__`;
            this.className = `empty`;
            this.isBeingEaten = false;
            console.log(this.className);
        }

    }
}