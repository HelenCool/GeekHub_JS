import Thing from './Thing.js';

export default class Plant extends Thing {
    constructor(stage, className) {
        super();
        this.isBeingEaten = false;
        this.isDestroyed = false;
        this.stage = stage;
        this.className = className;
    }

    //функция поедания
    decreasing(damage) {
        if (this.stage !== 0) {
            this.stage -= damage;
            this.isBeingEaten = true;
        }

        if (this.stage === 0) {
            this.isDestroyed = true;
            this.disappear();
        }

    }

    //полное съедание растения
    disappear() {
        this.elem = `__`;
        this.className = `empty`;
    }

    //падение фруктов/ягод возле растения
    dropHarvest(field, item) {
        let emptyArea = this.getEmptyArea(field);

        if (!emptyArea.length) {
            return;
        }

        let emptyAreaIndex = Math.round(Math.random() * (emptyArea.length - 1));
        let place = emptyArea[emptyAreaIndex];
        if (!place) {
            return;
        }
        if (!item) {
            return;
        }
        if (place.elem !== "__") {
            return;
        }

        item.x = place.x;
        item.y = place.y;

        field.matrix[item.x][item.y] = item;


        field.harvest.push(item);

    }
}
