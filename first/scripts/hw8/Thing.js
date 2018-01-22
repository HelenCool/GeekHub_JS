export default class Thing {
    constructor() {
        this.x = null;
        this.y = null;
    }

    /**
     * создание массива соседних клеток элемента
     * @param field
     * @returns {Array}
     */
    getNeighbours(field) {
        let neighbours = [];
        debugger;
        for (let i = this.x - 1; i <= this.x + 1; i++) {
            for (let j = this.y - 1; j <= this.y + 1; j++) {
                let isOut = i < 0 || i >= field.matrix.length || j < 0 || j >= field.matrix[this.y].length;

                let isThing = false;
                if ((i === this.x) && (j === this.y)) {
                    isThing = true;
                }


                if (!isThing && !isOut) {
                    neighbours.push(field.matrix[i][j]);
                }
            }
        }

        return neighbours;
    }

    /**
     * ищет пустое поле вокруг растения для дропа ягод/фруктов
     */
    getEmptyArea(field) {
        let plantNeighbours = this.getNeighbours(field);
        plantNeighbours = plantNeighbours.filter((neighbour) => {
            return neighbour.elem === '__';
        });

        return plantNeighbours;
    }
}
