import Deer from "./Deer.js";
import Mouse from "./Mouse.js";
import Bush from "./Bush.js";
import Tree from "./Tree.js";
import Empty from "./Empty.js";
import Hunter from "./Hunter.js";


/**
 * интерфейс поля
 */

export default class Field {
    constructor(treesCounter, bushesCounter) {
        this.deer = {};
        this.mouse = {};
        this.hunter = {};

        this.stepCounter = 0;

        this.haveDeer = false;
        this.haveMouse = false;
        this.haveHunter = false;

        this.matrix = [];
        this.bushes = [];
        this.trees = [];
        this.harvest = [];
        this.treesCounter = treesCounter;
        this.bushesCounter = bushesCounter;
    }

    getRandPosition() {
        let x = Math.round(Math.random() * (this.matrix.length - 1));
        let y = Math.round(Math.random() * (this.matrix.length - 1));
        return this.matrix[x][y];
    }

    setDeer() {
        do {
            let pos = this.getRandPosition();
            if (pos.elem === "__") {
                this.deer = new Deer(100, 100, 'deer');
                this.deer.x = pos.x;
                this.deer.y = pos.y;
                this.haveDeer = true;
                this.matrix[pos.x][pos.y] = this.deer;
            }
        } while (!this.haveDeer);
    }

    setMouse() {
        do {
            let pos = this.getRandPosition();
            if (pos.elem === "__") {
                this.mouse = new Mouse(100, 100, 'mouse');
                this.mouse.x = pos.x;
                this.mouse.y = pos.y;
                this.haveMouse = true;
                this.matrix[pos.x][pos.y] = this.mouse;
            }
        } while (!this.haveMouse);
    }

    setHunter() {
        do {
            let pos = this.getRandPosition();
            if (pos.elem === "__") {
                this.hunter = new Hunter(100, 100, 'hunter');
                this.hunter.x = pos.x;
                this.hunter.y = pos.y;
                this.haveHunter = true;
                this.matrix[pos.x][pos.y] = this.hunter;
            }
        } while (!this.haveHunter);
    }

    setTrees() {
        do {
            let pos = this.getRandPosition();
            if (pos.elem === "__") {
                let tree = new Tree(2, "tree");
                tree.x = pos.x;
                tree.y = pos.y;
                this.treesCounter--;
                this.trees.push(tree);
                this.matrix[pos.x][pos.y] = tree;

            }
        } while (this.treesCounter);
    }

    setBushes() {
        do {
            let pos = this.getRandPosition();
            if (pos.elem === "__") {
                let bush = new Bush(1, "bush");
                bush.x = pos.x;
                bush.y = pos.y;
                this.bushesCounter--;
                this.bushes.push(bush);
                this.matrix[pos.x][pos.y] = bush;

            }
        } while (this.bushesCounter);
    }

    //выбор элемента для матрицы
    initItems() {
        this.setDeer();
        this.setMouse();
        this.setHunter();
        this.setTrees();
        this.setBushes();
    }

    setEmpty() {
        for (let i = 0; i < 20; i++) {
            this.matrix[i] = [];
            for (let j = 0; j < 20; j++) {
                let element = new Empty();

                this.matrix[i].push(element);
                element.x = i;
                element.y = j;

            }
        }
    }

    //заполнение матрицы
    fillField() {
        this.setEmpty();
        this.initItems();
        return this.matrix;
    }


    /**
     * ходьба животных
     * @returns {boolean}
     */
    changeDeerPosition() {
        let nextStep = this.deer.movement(this);

        /*проверка, если рядом куст или дерево, то олень его ест*/
        if (nextStep.className === `bush2` || nextStep.className === `tree` || nextStep.className === `berry` || nextStep.className === `fruit`) {
            this.deer.eatableUnit = nextStep;
            this.deer.isEating = true;
            return;
        }

        if (nextStep.className === 'mouse') { //олень не наступает на мышь
            return;
        }

        this.matrix[nextStep.x][nextStep.y] = this.deer; //записываем в клетку с новыми координами оленя
        this.matrix[this.deer.x][this.deer.y] = nextStep; //на место оленя пишем то, что он заместил своим шагом


        /*записываем новые координаты оленя*/
        this.deer.x = nextStep.x;
        this.deer.y = nextStep.y;

    }

    changeMousePosition() {
        let nextStep = this.mouse.movement(this);

        /*проверка, если рядом ягода или фрукт, то мышь его ест*/
        if (nextStep.className === `berry` || nextStep.className === `fruit`) {
            this.mouse.eatableUnit = nextStep;
            this.mouse.isEating = true;
            return;
        }

        if (nextStep.className === 'deer' || nextStep.className === "tree" || nextStep.className === `bush` || nextStep.className === `bush2`) { //мышь не наступает на оленя, дереевья, кусты
            return;
        }


        this.matrix[nextStep.x][nextStep.y] = this.mouse; //записываем в клетку с новыми координами мыши
        this.matrix[this.mouse.x][this.mouse.y] = nextStep; //на место мыши пишем то, что она заместила своим шагом


        /*записываем новые координаты оленя*/
        this.mouse.x = nextStep.x;
        this.mouse.y = nextStep.y;

    }

    changeHunterPosition() {
        let nextStep = this.hunter.movement(this);


        if (nextStep.className === "tree" || nextStep.className === 'bush'
            || nextStep.className === `berry` || nextStep.className === `fruit`) { //охотник не наступает на деревья, кусты, ягоды, фрукты, мышь
            return;
        }


        this.matrix[nextStep.x][nextStep.y] = this.hunter; //записываем в клетку с новыми координами охотника
        this.matrix[this.hunter.x][this.hunter.y] = nextStep; //на место охотника пишем то, что он заместил своим шагом


        /*записываем новые координаты охотника*/
        this.hunter.x = nextStep.x;
        this.hunter.y = nextStep.y;

    }
}
