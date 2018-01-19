import Thing from "./Thing.js";

export default class Animal extends Thing {
    /**
     *
     * @param health
     * @param satiety - сытость
     * @param className
     */
    constructor(health, satiety, className) {
        super();
        this.health = health;
        this.satiety = satiety;
        this.maxSatiety = 100;
        this.className = className;
        this.eatableUnit = {};
        this.isEating = false;

        this.isDead = false;
        this.deadCounter = 0;

        this.damage = 0; // damage определяется у каждого животного отдельно
    }

    /**
     * вызывает у какого-то растения функцию decreasing
     */
    eat(obj) {
        if (obj.stage === 0) {
            this.isEating = false;
        } else {
            this.isEating = true;
            obj.decreasing(this.damage);

            if (this.health < 100) {
                this.health += 20;
            } else if (this.satiety < this.maxSatiety) {
                this.satiety += 10;
                if (this.satiety > this.maxSatiety) {
                    this.satiety = 100;
                }
            }
        }
    }

    /**
     * выбирает рандомную соседнюю клетку
     * @param field
     * @returns {*}
     */
    movement(field) {
        let neighbours = this.getNeighbours(field);
        if (neighbours.length === 0) {
            return;
        }
        let choosePositionIndex = Math.round(Math.random() * (neighbours.length - 1));
        return neighbours[choosePositionIndex];
    }

    /**
     * сытость оленя/мыши уменьшается с каждым ходом на 5%
     */
    isHunger() {
        if (!this.isEating) {
            this.satiety -= 5;
        }
        this.isStarving();
    }

    /**
     * если у животного сытость меньше 0, то  у негоо отнимается здоровье.
     * После того, как кончится здоровье включается каунтер, чтобы убрать мертвое животное с поля
     */
    isStarving() {
        if (this.satiety <= 0) {
            this.health -= 10;
        }
        if (this.health <= 0) {
            this.isDead = true;
            this.deadCounter++;
        }
    }
}

