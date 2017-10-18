/* рекурсивно раскладывает двухмерный массив в одномерный */

/*function write(n) {
    if (n >= 0) {
        console.log(n);
        write(n - 1);
    }
}

write(10);*/

var evenNumbers = new Array();
var k = 0;
var oddNumbers = new Array();
var n = 0;

var data = new Array("car", "plane", "bus", "ship");

for(var i = 1; i < 10; i++){
    if( i % 2 == 0){
        evenNumbers[k] = i;
        k++;
    }
}

for(var i = 1; i < 9; i++){
    if( i % 2 != 0){
        oddNumbers[n] = i;
        n++;
    }
}

var twoDimens = new Array(evenNumbers, oddNumbers, data);
console.log(twoDimens);

/*for(var i = 0; i < twoDimens.length; i++){
    for(var j = 0; j < twoDimens[i].length; j++){
        console.log("Элемент с индексом " + i + " " + j + "  равен: " + twoDimens[i][j]);
    }
};*/

var toOneDimentional = function(twoDimens){
  var result = new Array();
  for(var i = 0; i < twoDimens.length; i++){
      for(var j = 0; j < twoDimens[i].length; j++){
          result.push(twoDimens[i][j]);
      }
  };
};

console.log(toOneDimentional());
