export class Animal {
    constructor(health, fill, x, y, className) {
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

    init (){ //проверка животное ест или идет
        console.log(this.isEating);
        if (!this.isEating){
            this.movement(matrix);
        } else {
            this.eat(this.eatableUnit);
        }
        draw(matrix);
    }
}

export class Deer extends Animal{
    constructor (){
        super (100, 100, x, y, `deer`)
    }

}