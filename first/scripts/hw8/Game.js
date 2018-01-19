import Berry from "./Berry.js";
import Fruit from "./Fruit.js";
import Field from "./Field.js";
import Renderer from "./Renderer.js";
import Empty from "./Empty.js";


//todo животное почему-то в каком-то месте не меняет своего положения, а заменяется пустым элементом
//todo поправить гниение
//todo олень не до конца ест дерево
//todo мышь ест фрукт и ягоду с одинаковой скоростью

class Game {
    constructor() {
        this.field = new Field(20, 20); //задается колличество деревьев, кустов
        this.myMatrix = this.field.fillField();

        this.renderer = new Renderer(this.myMatrix);

    }

    /**
     *  функция которая запускает игру
     */
    initGame() {
        this.field.deer.isHunger();
        this.field.mouse.isHunger();

        if (!this.field.deer.isEating) {
            this.field.changeDeerPosition();
        } else {
            this.field.deer.eat(this.field.deer.eatableUnit);
        }

        if (!this.field.mouse.isEating) {
            this.field.changeMousePosition();
        } else {
            this.field.mouse.eat(this.field.mouse.eatableUnit);
        }

        this.initDropHarvest(this.field);
        this.harvestRot(this.field);


        /**
         * мертвое животное должно удаляться через 3 хода после смерти
         */
        if (this.field.deer.deadCounter === 3) {
            this.field.haveDeer = false;
            let deadDeer = new Empty();
            deadDeer.x = this.field.deer.x;
            deadDeer.y = this.field.deer.y;
            this.field.matrix[this.field.deer.x][this.field.deer.y] = deadDeer;
        }
        if (this.field.mouse.deadCounter === 3) {
            this.field.haveMouse = false;
            let deadMouse = new Empty();
            deadMouse.x = this.field.mouse.x;
            deadMouse.y = this.field.mouse.y;
            this.field.matrix[this.field.mouse.x][this.field.mouse.y] = deadMouse;
        }

        /**
         * Если если куст съели - удаляем его из массива
         */
        this.field.bushes.forEach(bush => {
            if (bush.isDestroyed) {
                delete this.field.bushes[this.field.bushes.indexOf(bush)];
            }
        });

        /**
         * Если если дерево съели - удаляем его из массива
         */
        this.field.trees.forEach(tree => {
            if (tree.isDestroyed) {
                delete this.field.trees[this.field.trees.indexOf(tree)];
            }
        });
    }


    /**
     * падение ягод и фруктов
     */
    initDropHarvest(field) {
        if (field.stepCounter % 4 === 0 && field.stepCounter !== 0) {
            field.bushes.forEach(bush => bush.dropHarvest(field, new Berry(1, 'berry')));
            field.trees.forEach(tree => tree.dropHarvest(field, new Fruit(1, 'fruit')));
        }
    }

    /**
     * гниение фруктов и ягод за 4 хода
     */
    harvestRot(field) {
        this.field.harvest = this.field.harvest.filter(harvest => {
            harvest.lifeCycle(field);
            return harvest.elem !== "__";
        });
    }

    /**
     * рост кустов
     */
    bushesGrowth() {
        this.field.bushes.forEach(bush => bush.growth());
    }
}


let game = new Game;
// game.renderer.draw(game.field);
game.bushesGrowth();


let timer = setInterval(function () {
    if (game.field.haveDeer || game.field.haveMouse) {
        game.initGame();
        game.renderer.draw(game.field);
    }
}, 500);
setTimeout(function () {
    clearInterval(timer)
}, 60000);
