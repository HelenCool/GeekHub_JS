import {Deer} from "./Animals.js";
import {Mouse} from "./Animals.js";
import {Bush} from "./Plants.js";
import {Tree} from "./Plants.js";
import {Berry} from "./Plants.js";
import {Fruit} from "./Plants.js";
import Field from "./Field.js";

//todo "сущности должны делать только то, что оны умеют
//todo перписать движение животного
//todo мышь!!!
//todo падение/съедание фрутов/ягод
//todo полосы сытости - здоровья

let field = new Field();
let myMatrix = field.fillField();


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

// function addHarvest(myMatrix) {
//     let length = myMatrix.length;
//     for (let i = 0; i < length; i++) {
//         let l = myMatrix[i].length;
//         for (let j = 0; j < l; j++) {
//             if (myMatrix[i][j].elem === `*`) {
//                 myMatrix[i][j].elem = new Berry();
//                 myMatrix[i][j].position.y = i;
//                 myMatrix[i][j].position.x = j;
//             }
//         }
//     }
//     //draw(myMatrix);
// }


function isAnimalEating(animal) { //проверка животное ест или идет
    if (!animal.isEating) {
        animal.movement(myMatrix);
    } else {
        animal.eat(animal.eatableUnit);
    }
    draw(myMatrix);
} //можно ли перенести в какой-то класс?


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
                let deer = new Deer(100, 100, j, i, `deer`);
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




bushesGrowth(bushes);

let timer = setInterval(function () {
    isAnimalEating(deer);
}, 2000);
setTimeout(function () {
    clearInterval(timer)
}, 60000);

