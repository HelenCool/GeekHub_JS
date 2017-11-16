var matrix = [
    ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '*', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '*', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '*', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.', '*', '.', '@', '.', '*', '.', '.', '.'],
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


function getPosition() {
    var positions = ["left", "right", "up", "down", "leftUp", "leftDown", "rightUp", "rightDown"];
    return positions[Math.round(Math.random() * 7)];
}

var x;
var y;

var length = matrix.length;
for (var i = 0; i < length; i++) {
    var l = matrix[i].length;
    for (var j = 0; j < l; j++) {
        if (matrix[i][j] == "@") {
            y = i;
            x = j;

        }
    }
}

function draw(matrix) {
    var outPut = "";
    for (var i = 0; i < matrix.length; i++) {
        for (var j = 0; j < matrix[i].length; j++) {
            outPut += matrix[i][j] + " ";
        }
        outPut += "\n";
    }
    console.log(outPut);
}

draw(matrix);

function movement(matrix) {
    var switcher = getPosition();
    console.log(switcher);
    switch (switcher) {
        case "leftUp": {
            changePosition(-1, -1);
            break;
        }
        case "up": {
            changePosition(-1, 0);
            break;
        }
        case "rightUp": {
            changePosition(-1, 1);
            break;
        }
        case "right": {
            changePosition(0, 10);
            break;
        }
        case "rightDown": {
            changePosition(1, 1);
            break;
        }
        case "down": {
            changePosition(1, 0);
            break;
        }
        case "leftDown": {
            changePosition(1, -1);
            break;
        }
        case "left": {
            changePosition(0, 1);
            break;
        }
    }
    draw(matrix);
}

function changePosition(stepY, stepX) {
    var nextStep = null;
    if ((y + stepY) >= matrix.length || (y + stepY) < 0 || (x + stepX) >= matrix[x].length || (x + stepX) < 0) {
        console.log("Warning2");
        return false;
    }
    nextStep = matrix[y + stepY][x + stepX];
    if (nextStep === "*") {
        console.log("Warning");
        return false;
    }

    matrix[y + stepY][x + stepX] = matrix[y][x];
    matrix[y][x] = nextStep;
    x += stepX;
    y += stepY;
}


var timer = setInterval(function () {
    movement(matrix)
}, 2000);
setTimeout(function (){clearInterval(timer)}, 30000);