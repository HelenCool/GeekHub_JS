export class Plant {
    constructor(stage, className) {
        this.isBeingEaten = false;
        this.stage = stage;
        this.className = className;
        this.position = {
            x: ``,
            y: ``
        };
    }

    decreasing() { //функция поедания
        if (this.stage !== 0) {
            console.log(this.stage);
            this.stage--;
            this.isBeingEaten = true;
        }
        else {
            this.elem = `__`;
            this.className = `empty`;
            this.isBeingEaten = false;
        }

    }

    rot (){
        if (this.className ===`berry`|| this.className ===`fruit`){

        }
    }
}

export class Tree extends Plant {
    constructor() {
        super(3, `tree`);
        this.elem = `&#5833`;
    }
//todo исправить наследование - у дерева стейдж 2 раза естся или как-то так
    decreasing() {//функция поедания дерева
        super.decreasing();
        console.log(this.stage);
        if (this.stage === 1) {
            this.className = `treeWithoutLeaves`;
            this.elem = `|`;
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
        super.decreasing();
    }
}

export class Berry extends Plant {
    constructor(){
        super(4, `berry`)
        this.elem = `o`;
    }
}

export class Fruit extends Plant {
    constructor(){
        super(4, `fruit`)
        this.elem = `o`;
    }
}