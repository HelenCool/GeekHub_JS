"use strict";
let haveDog = false;
let randomiser;


function getRandom() {
    randomiser = Math.round(Math.random() * 3);
    return randomiser;
}

let chooseElement = getRandom();

function getVal() {
    if (chooseElement === 0 && !haveDog) {
        haveDog = true;
        return {
            elem: `@`,
            className: `animal`
        }
    }
    else if (chooseElement === 1) {
        let switcher = getRandom() * 5;
        if (switcher < 4) {
            return {
                elem: `&#5833`, //дерево с листьями
                className: `tree`,
            }
        } else {
            return {
                elem: `*`,
                className: `bush`,
            }
        }
    }
    else {
        return {
            elem: `__`,
            className: `empty`
        }
    }
}


let range = {
    from: 1,
    to: 20
};
range[Symbol.iterator] = function () {

    let current = this.from;
    let last = this.to;
    return {
        next() {
            if (current <= last) {
                return {
                    done: false,
                    value: current++
                };
            } else {
                return {
                    done: true
                };
            }
        }

    }
};


let i = 0;
let j = 0;
let matrix = [];

function fillArray() {
    for (i = 0; i < 20; i++) {
        matrix[i] = [];
        for (j = 0; j < 20; j++) {
            chooseElement = getRandom();
            let element = getVal();
            matrix[i].push(element);
        }
    }
    return matrix;

}

matrix = fillArray();



function draw(matrix) {
    let outPut = ``;
    for (let i = 0; i < matrix.length; i++) {
        outPut += `<div>`;
        for (let j = 0; j < matrix[i].length; j++) {
            outPut += `<span class="${matrix[i][j].className}">${matrix[i][j].elem}</span>`;
        }
        outPut += `</div>`;
    }
    document.body.innerHTML = outPut;
}

draw(matrix);


let x;
let y;

function getPosition() {
    let positions = ["left", "right", "up", "down", "leftUp", "leftDown", "rightUp", "rightDown"];
    return positions[Math.round(Math.random() * 7)];
}

let nextStep = null;

class Animal {
    constructor(health, fill, x, y, className) {
        this.health = health;
        //this.fill = fill;
        this.eatableUnit = {};
        this.className = className;
        this.isEating = false;
        this.position = {
            x: ``,
            y: ``
        };
        this.points = {
            tree: 3,
            bush: 2,
            fruit: 1
        };
    }

    eat(obj) {
        if (obj.stage === 0) {
            this.isEating = false;
        }
        obj.decreasing();
    }

    movement(matrix) {
        let switcher = getPosition();
        if (!this.isEating) {
            console.log(switcher);
            switch (switcher) {
                case "leftUp": {
                    this.changePosition(-1, -1, matrix);
                    break;
                }
                case "up": {
                    this.changePosition(-1, 0, matrix);
                    break;
                }
                case "rightUp": {
                    this.changePosition(-1, 1, matrix);
                    break;
                }
                case "right": {
                    this.changePosition(0, 1, matrix);
                    break;
                }
                case "rightDown": {
                    this.changePosition(1, 1, matrix);
                    break;
                }
                case "down": {
                    this.changePosition(1, 0, matrix);
                    break;
                }
                case "leftDown": {
                    this.changePosition(1, -1, matrix);
                    break;
                }
                case "left": {
                    this.changePosition(0, 1, matrix);
                    break;
                }
            }
        }
    }

    changePosition(stepY, stepX, matrix) {

        if ((this.position.y + stepY) >= matrix.length || (this.position.y + stepY) < 0 ||
            (this.position.x + stepX) >= matrix[this.position.x].length || (this.position.x + stepX) < 0) {
            console.log("You've reached the edge");
            return false;
        }
        nextStep = matrix[this.position.y + stepY][this.position.x + stepX];
        if (nextStep.elem === `*` || nextStep.elem === `&#5833`) {
            this.eatableUnit = nextStep;
            this.isEating = true;
            console.log(this.isEating);
            return false;
        }

        matrix[this.position.y + stepY][this.position.x + stepX] = matrix[this.position.y][this.position.x];
        matrix[this.position.y][this.position.x] = nextStep;
        this.position.x += stepX;
        this.position.y += stepY;
        console.log(this.isEating);

    }

    init (){
        console.log(this.isEating);
        if (!this.isEating){
            this.movement(matrix);
        } else {
            this.eat(this.eatableUnit);
        }
        draw(matrix);
    }
}


class Plant {
    constructor(stage, className, x, y) {
        this.stage = stage;
        this.className = className;
        this.position = {
            x: ``,
            y: ``
        };

    }
}

class Tree extends Plant {
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

class Bush extends Plant {
    constructor() {
        super(1, `bush`);
        this.elem = `*`;
        this.maxLvl = 2;
    }

    growth() { //функция роста куста
        if (this.stage !== this.maxLvl) {
            this.stage++;
            this.className = `bush2`;
        }
    }

    decreasing() { //функция поедания куста
        if (this.stage !== 0) {
            this.stage--;
        }
        else {
            this.elem = `__`;
            this.className = `empty`;
        }

    }
}

class Path {
    constructor(className, x, y) {
        this.className = className;
        this.position = {
            x: ``,
            y: ``
        };
        this.elem = `__`;
    }
}

function findDeer(matrix) {
    let length = matrix.length;
    for (let i = 0; i < length; i++) {
        let l = matrix[i].length;
        for (let j = 0; j < l; j++) {
            if (matrix[i][j].elem === `@`) {
                let deer = new Animal(100, 100, j, i, `deer`);
                deer.position.y = i;
                deer.position.x = j;
                return deer;
            }
        }
    }
}

let deer = findDeer(matrix);

function findBushes(matrix) {
    let bushes = [];
    let length = matrix.length;
    for (let i = 0; i < length; i++) {
        let l = matrix[i].length;
        for (let j = 0; j < l; j++) {
            if (matrix[i][j].elem === `*`) {
                matrix[i][j] = new Bush(1, `bush`, j, i);
                matrix[i][j].position.y = i;
                matrix[i][j].position.x = j;
                bushes.push(matrix[i][j]);
            }
        }
    }
    return bushes;
}

let bushes = findBushes(matrix);

function findTrees(matrix) {
    let trees = [];
    let length = matrix.length;
    for (let i = 0; i < length; i++) {
        let l = matrix[i].length;
        for (let j = 0; j < l; j++) {
            if (matrix[i][j].elem === `&#5833`) {
                matrix[i][j] = new Tree(3, `tree`, j, i);
                matrix[i][j].position.y = i;
                matrix[i][j].position.x = j;
                trees.push(matrix[i][j]);
            }
        }
    }
    return trees;
}

let trees = findTrees(matrix);

function findPath(matrix) {
    let path = [];
    let length = matrix.length;
    for (let i = 0; i < length; i++) {
        let l = matrix[i].length;
        for (let j = 0; j < l; j++) {
            if (matrix[i][j].elem === `__`) {
                matrix[i][j] = new Path(`empty`, j, i);
                matrix[i][j].position.y = i;
                matrix[i][j].position.x = j;
                path.push(matrix[i][j]);
            }
        }
    }
    return path;
}

let path = findPath(matrix);

function bushesGrowth(bushes) {
    for (let i = 0; i < bushes.length; i++) {
        bushes[i].growth();
    }
}

bushesGrowth(bushes);
let timer = setInterval(function () {
    deer.init();
}, 2000);
setTimeout(function () {
    clearInterval(timer)
}, 60000);

