import {Animal} from "./Animals.js";
import {Bush} from "./Plants.js";
import {Tree} from "./Plants.js";
import Matrix from "./Matrix.js";

//todo "сущности должны делать только то, что оны умеют
//todo перенести класс животных в отдельный модуль
//todo мышь!!!
//todo падение/съедание фрутов/ягод
//todo полосы сытости - здоровья

let matrix = new Matrix();
let myMatrix = matrix.fillMatrix();

function draw(myMatrix) {
    let outPut = ``;
    for (let i = 0; i < myMatrix.length; i++) {
        outPut += `<div>`;
        for (let j = 0; j < myMatrix[i].length; j++) {
            outPut += `<span class="${myMatrix[i][j].className}">${myMatrix[i][j].elem}</span>`;
        }
        outPut += `</div>`;
    }
    document.body.innerHTML = outPut;
}
draw(myMatrix);


function getPosition() {
    let positions = ["left", "right", "up", "down", "leftUp", "leftDown", "rightUp", "rightDown"];
    return positions[Math.round(Math.random() * 7)];
}

let nextStep = null;

// class Animal {
//     constructor(health, fill, x, y, className) {
//         this.health = health;
//         //this.fill = fill;
//         this.eatableUnit = {};
//         this.className = className;
//         this.isEating = false;
//         this.position = {
//             x: ``,
//             y: ``
//         };
//         this.points = {
//             tree: 3,
//             bush: 2,
//             fruit: 1
//         };
//     }
//
//     eat(obj) {
//         if (obj.stage === 0) {
//             this.isEating = false;
//         }
//         obj.decreasing();
//     }
//
//     movement(myMatrix) {
//         let switcher = getPosition();
//         if (!this.isEating) {
//             console.log(switcher);
//             switch (switcher) {
//                 case "leftUp": {
//                     this.changePosition(-1, -1, myMatrix);
//                     break;
//                 }
//                 case "up": {
//                     this.changePosition(-1, 0, myMatrix);
//                     break;
//                 }
//                 case "rightUp": {
//                     this.changePosition(-1, 1, myMatrix);
//                     break;
//                 }
//                 case "right": {
//                     this.changePosition(0, 1, myMatrix);
//                     break;
//                 }
//                 case "rightDown": {
//                     this.changePosition(1, 1, myMatrix);
//                     break;
//                 }
//                 case "down": {
//                     this.changePosition(1, 0, myMatrix);
//                     break;
//                 }
//                 case "leftDown": {
//                     this.changePosition(1, -1, myMatrix);
//                     break;
//                 }
//                 case "left": {
//                     this.changePosition(0, -1, myMatrix);
//                     break;
//                 }
//             }
//         }
//     }
//
//     changePosition(stepY, stepX, myMatrix) {
//         if ((this.position.y + stepY) >= myMatrix.length || (this.position.y + stepY) < 0 ||
//             (this.position.x + stepX) >= myMatrix[this.position.x].length || (this.position.x + stepX) < 0) {
//             console.log("You've reached the edge");
//             return false;
//         }
//         nextStep = myMatrix[this.position.y + stepY][this.position.x + stepX];
//         if (nextStep.elem === `*` || nextStep.elem === `&#5833`) {
//             this.eatableUnit = nextStep;
//             this.isEating = true;
//             return false;
//         }
//
//         myMatrix[this.position.y + stepY][this.position.x + stepX] = myMatrix[this.position.y][this.position.x];
//         myMatrix[this.position.y][this.position.x] = nextStep;
//         this.position.x += stepX;
//         this.position.y += stepY;
//
//     }
//
//     init() { //проверка животное ест или идет
//         if (!this.isEating) {
//             this.movement(myMatrix);
//         } else {
//             this.eat(this.eatableUnit);
//         }
//         draw(myMatrix);
//     }
// }


class Path {
    constructor(className, x, y) {
        this.className = className;
        this.position = {
            x: ``,
            y: ``
        };
        this.elem = `__`;
    }
} //todo разобраться, надо ли класс дорожек?

//todo разобраться со следующими функциями и зачем они нужны?
function findDeer(myMatrix) {
    let length = myMatrix.length;
    for (let i = 0; i < length; i++) {
        let l = myMatrix[i].length;
        for (let j = 0; j < l; j++) {
            if (myMatrix[i][j].elem === `@`) {
                let deer = new Animal(100, 100, j, i, `deer`);
                deer.position.y = i;
                deer.position.x = j;
                return deer;
            }
        }
    }
}

let deer = findDeer(myMatrix);

function findBushes(myMatrix) {
    let bushes = [];
    let length = myMatrix.length;
    for (let i = 0; i < length; i++) {
        let l = myMatrix[i].length;
        for (let j = 0; j < l; j++) {
            if (myMatrix[i][j].elem === `*`) {
                myMatrix[i][j] = new Bush(1, `bush`, j, i);
                myMatrix[i][j].position.y = i;
                myMatrix[i][j].position.x = j;
                bushes.push(myMatrix[i][j]);
            }
        }
    }
    return bushes;
}

let bushes = findBushes(myMatrix);

function findTrees(myMatrix) {
    let trees = [];
    let length = myMatrix.length;
    for (let i = 0; i < length; i++) {
        let l = myMatrix[i].length;
        for (let j = 0; j < l; j++) {
            if (myMatrix[i][j].elem === `&#5833`) {
                myMatrix[i][j] = new Tree(3, `tree`, j, i);
                myMatrix[i][j].position.y = i;
                myMatrix[i][j].position.x = j;
                trees.push(myMatrix[i][j]);
            }
        }
    }
    return trees;
}

let trees = findTrees(myMatrix);

function findPath(myMatrix) {
    let path = [];
    let length = myMatrix.length;
    for (let i = 0; i < length; i++) {
        let l = myMatrix[i].length;
        for (let j = 0; j < l; j++) {
            if (myMatrix[i][j].elem === `__`) {
                myMatrix[i][j] = new Path(`empty`, j, i);
                myMatrix[i][j].position.y = i;
                myMatrix[i][j].position.x = j;
                path.push(myMatrix[i][j]);
            }
        }
    }
    return path;
}

let path = findPath(myMatrix);

function bushesGrowth(bushes) {
    for (let i = 0; i < bushes.length; i++) {
        bushes[i].growth();
    }
}


function isAnimalEating(animal) { //проверка животное ест или идет
    if (!animal.isEating) {
        animal.movement(myMatrix);
    } else {
        animal.eat(animal.eatableUnit);
    }
    draw(myMatrix);
}



bushesGrowth(bushes);
let timer = setInterval(function () {
    isAnimalEating(deer);
}, 2000);
setTimeout(function () {

    clearInterval(timer)
}, 20000);

