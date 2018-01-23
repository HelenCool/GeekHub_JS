import Animal from "./Animal.js";

export default class Hunter extends Animal {
    constructor(health, satiety, className) {
        super(health, satiety, className);
        this.elem = `&#129338`;
        this.damage = 100;
        this.isHunting = false;
        this.victims = [];
    }


    /**
     * поле зрение охотника - 4 клетки
     * @param field
     */
    findVictim(field) {
        for (let i = this.x - 4; i <= this.x + 4; i++) {
            for (let j = this.y - 4; j <= this.y + 4; j++) {
                let isOut = i < 0 || i >= field.matrix.length || j < 0 || j >= field.matrix[this.y].length;

                let isThing = false;
                if ((i === this.x) && (j === this.y)) {
                    isThing = true;
                }


                if (!isThing && !isOut) {
                    this.isHunting = true;
                    this.victims.push(field.matrix[i][j]);
                }
            }
        }
    }


    /**
     * охотник убивает оленя одним выстрелом если видит его на расстоянии 4 клеток
     */
    hunting() {
        if (this.victims !== 0) {
            this.victims.forEach(victim => {
                if (victim.className === 'deer') {
                    victim.health -= this.damage;
                }
            })
        }
    }

    //todo может стоит поменять голод для охотника - будет быстро умирать
    isHunger() {
        super.isHunger();
    }
}
