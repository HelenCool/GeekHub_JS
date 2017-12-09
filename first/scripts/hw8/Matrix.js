export default class Matrix {
    constructor() {
        this.haveDeer = false;
        this.chooseElement = Math.round(Math.random());
        this.matrix = [];
        this.deerNeighbours = [];
    }

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

    fillMatrix() {
        for (let i = 0; i < 20; i++) {
            this.matrix[i] = [];
            for (let j = 0; j < 20; j++) {
                this.chooseElement = Math.round(Math.random() * 3);
                let element = this.getVal();
                this.matrix[i].push(element);
            }
        }
        console.log(this.matrix);
        return this.matrix;

    }

    // checkPosition() {
    //     let length = this.fillMatrix().length;
    //     console.log(length);
    //     for (let i = 0; i < length; i++) {
    //         let l = this.fillMatrix()[i].length;
    //         for (let j = 0; j < l; j++) {
    //             if (this.fillMatrix()[i][j].elem == `@`) {
    //                 this.deerNeighbours.push(
    //                     this.fillMatrix()[i - 1][j - 1], this.fillMatrix()[i - 1][j],
    //                     this.fillMatrix()[i - 1][j + 1], this.fillMatrix()[i][j+1], this.fillMatrix()[i+1][j + 1],
    //                     this.fillMatrix()[i+1][j], this.fillMatrix()[i + 1][j-1], this.fillMatrix()[i][j - 1]);
    //             }
    //         }
    //     }
    // }



}

