/**
 * Класс отрисовщика матрицы
 */
export default class Renderer {
    constructor(drawableMatrix) {
        this.drawableMatrix = drawableMatrix;
    }

    draw(field) {
        let outPut = ``;
        for (let i = 0; i < this.drawableMatrix.length; i++) {
            outPut += `<div>`;
            for (let j = 0; j < this.drawableMatrix[i].length; j++) {
                outPut += `<span class="${this.drawableMatrix[i][j].className}">${this.drawableMatrix[i][j].elem}</span>`;
            }
            outPut += `</div>`;
        }
        outPut += `<h3> Deer: </h3><text>Health:   </text><progress id="health" value="${field.deer.health}" max="100"></progress> 
                    <text>Satiety:   </text><progress id="satiety" value="${field.deer.satiety}" max="100">Satiety</progress>
                       <h3> Mouse: </h3><text>Health:   </text><progress id="health" value="${field.mouse.health}" max="100"></progress> 
                    <text>Satiety:   </text><progress id="satiety" value="${field.mouse.satiety}" max="100">Satiety</progress>`;


        document.body.innerHTML = outPut;
        if (!isNaN(field.stepCounter)) {
            field.stepCounter++;
        }

    }
}
