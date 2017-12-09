let randomiser;
import {Deer} from "./Animals.js";

export default class Matrix {
    constructor(){

    }

    getRandom() {
        randomiser = Math.round(Math.random() * 3);
        return randomiser;
    }

    getVal() {
        let deer = {};
        let bushes = [];
        let trees = [];
        let path =[];
        if (chooseElement === 0 && !haveDeer) {
            haveDeer = true;
            deer = new Deer();
            return deer;
        }
        else if (chooseElement === 1) {
            let switcher = getRandom() * 5;
            if (switcher < 4) {
                bushes.push()
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
}

let chooseElement = getRandom();

function getVal() {
    let deer = {};
    let bushes = [];
    let trees = [];
    let path =[];
    if (chooseElement === 0 && !haveDeer) {
        haveDeer = true;
        deer = new Deer();
        return { deer
            // elem: `@`,
            // className: `animal`
        }
    }
    else if (chooseElement === 1) {
        let switcher = getRandom() * 5;
        if (switcher < 4) {
            bushes.push()
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

function fillMatrix() {
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

matrix = fillMatrix();



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
