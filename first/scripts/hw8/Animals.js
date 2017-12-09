import Matrix from "./Matrix.js";

let nextStep = null;

function getPosition() {
    let positions = ["left", "right", "up", "down", "leftUp", "leftDown", "rightUp", "rightDown"];
    return positions[Math.round(Math.random() * 7)];
}
let myMatrix = new Matrix().fillMatrix();

export class Animal {
    constructor(health, fill, className,  x, y) {
        this.health = health;
        this.fill = fill;
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

    movement(myMatrix) {
        let switcher = getPosition();
        if (!this.isEating) {
            console.log(switcher);
            switch (switcher) {
                case "leftUp": {
                    this.changePosition(-1, -1, myMatrix);
                    break;
                }
                case "up": {
                    this.changePosition(-1, 0, myMatrix);
                    break;
                }
                case "rightUp": {
                    this.changePosition(-1, 1, myMatrix);
                    break;
                }
                case "right": {
                    this.changePosition(0, 1, myMatrix);
                    break;
                }
                case "rightDown": {
                    this.changePosition(1, 1, myMatrix);
                    break;
                }
                case "down": {
                    this.changePosition(1, 0, myMatrix);
                    break;
                }
                case "leftDown": {
                    this.changePosition(1, -1, myMatrix);
                    break;
                }
                case "left": {
                    this.changePosition(0, 1, myMatrix);
                    break;
                }
            }
        }
    }

    changePosition(stepY, stepX, myMatrix) {

        if ((this.position.y + stepY) >= myMatrix.length || (this.position.y + stepY) < 0 ||
            (this.position.x + stepX) >= myMatrix[this.position.x].length || (this.position.x + stepX) < 0) {
            console.log("You've reached the edge");
            return false;
        }
        nextStep = myMatrix[this.position.y + stepY][this.position.x + stepX];
        if (nextStep.elem === `*` || nextStep.elem === `&#5833`) {
            this.eatableUnit = nextStep;
            this.isEating = true;
            return false;
        }

        myMatrix[this.position.y + stepY][this.position.x + stepX] = myMatrix[this.position.y][this.position.x];
        myMatrix[this.position.y][this.position.x] = nextStep;
        this.position.x += stepX;
        this.position.y += stepY;

    }

}

export class Deer extends Animal{
    constructor (){
        super (100, 100, `deer`)
    }

}