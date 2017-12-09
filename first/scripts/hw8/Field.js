import {Deer} from "./Animals.js";
import {Mouse} from "./Animals.js";
import {Bush} from "./Plants.js";
import {Tree} from "./Plants.js";

export default class Field {
    constructor() {
        this.neighbour = {};
        this.haveDeer = false;
        this.chooseElement = Math.round(Math.random());
        this.matrix = [];
        this.x = ``;
        this.y = ``;
        this.deerNeighbours = [];
        this.deer = {};
        //this.bushes = [];
        this.trees = [];
    }
    //
    // getPosition() {
    //     let positions = ["left", "right", "up", "down", "leftUp", "leftDown", "rightUp", "rightDown"];
    //     return positions[Math.round(Math.random() * 7)];
    // }
    // randomPosition() {
    //     let switcher = this.getPosition();
    //     console.log(switcher);
    //     switch (switcher) {
    //         case "leftUp": {
    //             this.neighbour = this.matrix[this.x - 1][this.y - 1];
    //             break;
    //         }
    //         case "up": {
    //             this.neighbour = this.matrix[this.x - 1][this.y];
    //             break;
    //         }
    //         case "rightUp": {
    //             this.neighbour = this.matrix[this.x - 1][this.y + 1];
    //             break;
    //         }
    //         case "right": {
    //             this.neighbour = this.matrix[this.x][this.y + 1];
    //             break;
    //         }
    //         case "rightDown": {
    //             this.neighbour = this.matrix[this.x + 1][this.y + 1];
    //             break;
    //         }
    //         case "down": {
    //             this.neighbour = this.matrix[this.x + 1][this.y];
    //             break;
    //         }
    //         case "leftDown": {
    //             this.neighbour = this.matrix[this.x + 1] [this.y - 1];
    //             break;
    //         }
    //         case "left": {
    //             this.neighbour = this.matrix[this.x][this.y - 1];
    //             break;
    //         }
    //     }
    //     return this.neighbour;
    // }

    getVal() {
        if (this.chooseElement === 0 && !this.haveDeer) {
            this.haveDeer = true;
            return {
                elem: `@`,
                className: `animal`
            }
        }
        else if (this.chooseElement === 1) {
            let switcher = Math.round(Math.random() * 10);
            if (switcher > 5) {
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

    fillField() {
        for (let i = 0; i < 20; i++) {
            this.matrix[i] = [];
            for (let j = 0; j < 20; j++) {
                this.chooseElement = Math.round(Math.random() * 3);
                let element = this.getVal();
                this.matrix[i].push(element);
            }
        }
        return this.matrix;

    }



    // checkPositions() {
    //     let length = this.matrix.length;
    //     for (let i = 0; i < length; i++) {
    //         let l = this.matrix[i].length;
    //         for (let j = 0; j < l; j++) {
    //             if (this.matrix[i][j].elem === `@`) {
    //                 this.deer = new Deer(100, 100, j, i, `deer`);
    //                 this.deer.position.y = i;
    //                 this.deer.position.x = j;
    //             }
    //             if (this.matrix[i][j].elem === `*`){
    //                 this.matrix[i][j] = new Bush(1, `bush`, j, i);
    //                 this.matrix[i][j].position.y = i;
    //                 this.matrix[i][j].position.x = j;
    //                 this.bushes.push(this.matrix[i][j]);
    //                 this.x.push(j);
    //                 this.y.push(i);
    //             }
    //             if (this.matrix[i][j].elem === `&#5833`){
    //                 this.matrix[i][j] = new Tree(3, `tree`, j, i);
    //                 this.matrix[i][j].position.y = i;
    //                 this.matrix[i][j].position.x = j;
    //                 this.trees.push(this.matrix[i][j]);
    //
    //             }
    //         }
    //     }
    // }
}

