"use strict";
let haveDog = false;
let randomiser;
let myDiv = document.getElementById("matrixDiv");


function getRandom (){
    randomiser = Math.round(Math.random()*3);
    return randomiser;
}

let chooseElement = getRandom ();
function getVal() {
    if (chooseElement === 0 && !haveDog) {
        haveDog = true;
        return {
            elem: `@`,
            className: `animal`
        };
    }
    else if (chooseElement === 1) {

        return {
            elem: `*`,
            className: `tree`
        }
    }
    else {
        return {
            elem: `.`,
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

let matrix = ``;


for (let num of range) {
    matrix += `<div>`;
    for (let m of range) {
        chooseElement = getRandom();
        let result = getVal();
        matrix += `<span class="${result.className}">${result.elem}</span>`;
    }

    matrix += `</div>`;
}

myDiv.innerHTML = matrix;


