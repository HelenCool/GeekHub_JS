var matrix = [
    ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '*', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '*', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '*', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '@', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '*', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '*'],
    ['.', '.', '.', '.', '.', '.', '.', '*', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '*', '.', '.', '.', '.', '.', '.', '.', '*', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '*', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '*', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.']
];
var outPut = "";
var length = matrix.length;
for (var i = 0; i < length; i++) {
    var l = matrix[i].length;
    for (var j = 0; j < l; j++) {
        outPut += matrix[i][j] + " ";
        if (matrix[i][j] == "@"){
            var animal = matrix[i][j];
        }

    }
    outPut += "\n";
}
console.log(outPut);
var leftUp = outPut[i - 1][j - 1];
var up = outPut[i][j - 1];
var rightUp = outPut[i + 1][j - 1];
var right = outPut[i + 1][j];
var rightDown = outPut[i + 1][j + 1];
var down = outPut[i][j + 1];
var leftDown = outPut[i - 1][j + 1];
var left = outPut[i][j + 1];

function getPosition () {
    var positions = ['left', 'right', 'up', 'down', 'leftUp', 'leftDown', 'rightUp', 'rightDown'];
    return positions[Math.round(Math.random() * 7)];
}

function movement(outPut) {
    var temp = null;
    switch (getPosition ()) {
        case "leftUp":
        {
            temp = outPut[i - 1][j - 1];
            outPut[i - 1][j - 1] = animal;
            animal = temp;
            break;
        }
        case "up":
        {
            temp = outPut[i][j - 1];
            outPut[i][j - 1] = animal;
            animal = temp;
            break;
        }
        case "rightUp":
        {
            temp = outPut[i + 1][j - 1];
            outPut[i + 1][j - 1] = animal;
            animal = temp;
            break;
        }
        case "right":
        {
            temp = outPut[i + 1][j];
            outPut[i + 1][j] = animal;
            animal = temp;
            break;
        }
        case "rightDown":
        {
            temp = outPut[i][j + 1];
            outPut[i][j + 1] = animal;
            animal = temp;
            break;
        }
        case "down":
        {
            temp = outPut[i][j + 1];
            outPut[i][j + 1] = animal;
            animal = temp;
            break;
        }
        case "leftDown":
        {
            temp = outPut[i - 1][j + 1];
            outPut[i - 1][j + 1] = animal;
            animal = temp;
            break;
        }
        case "left":
        {
            temp = outPut[i][j + 1];
            outPut[i][j + 1] = animal;
            animal = temp;

            break;
        }
    }
    console.log(getPosition ());
    console.log(temp);
    console.log(outPut);
}

movement(outPut);

// var timer = setInterval(console.log(movement(outPut)), 2000);
// setTimeout(clearInterval(timer), 30000);