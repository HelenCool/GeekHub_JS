var chars = [];
var object1 = {};
var object2 = {};

//определение упорядоченого массива строк
for (var j=0;j<100000-1;j++){
    chars[j]=String.fromCharCode(j);
}

//отпределение упорядоченого объекта строк
for (var j=0;j<100000-1;j++){
    object1[j]="obj - "+String.fromCharCode(j);
}

//определение объекта с рандомными строками
for (var j =0; j<100000-1;j++){
    object2[j]= Math.random().toString(36);
}


//функция for для упорядоченого массива строк
var forArray = function() {
    for(var i=0;i<chars.length;i++) {
        chars[i]="new char = " + String.fromCharCode(j+1);
    }
    //console.log(chars);
}

//функция for in для упорядоченого массива строк
var forinArray = function(){
    for (var key in chars){
        chars[key]="new char = " + String.fromCharCode(j+1);
    }
    //console.log(chars);
}

//функция for для упорядоченого объекта строк
var forObject1 = function(i) {
    var key = Object.keys(object1)[i]; // возвращает массив из свойств переданного объекта
    for(var i=0;i<object1.length;i++) {
        object1[key]="new obj = " + String.fromCharCode(j+1);
    }
    //console.log(object1);
}



//функция for in для упорядоченого объекта строк
var forinObject1 = function(i){
    for (var key in object1){
        object1[key]= "new obj = " + String.fromCharCode(j+1);
    }
    //console.log(object1);
}


//функция for для объекта с рандомными строками
var forObject2 = function(i) {
    var key = Object.keys(this)[i]; // возвращает массив из свойств
    for(var i=0;i<object2.length;i++) {
        object2[key]= (Math.random()*100).toString();
    }
    //console.log(object2);
}

var g = forObject2.bind(object2); //привязка контекста

//функция for in для объекта с рандомными строками
var forinObject2 = function(){
    for (var key in object2){
        object2[key]= (Math.random()*100).toString();
    }
    //console.log(object2);
}


//бенчмарки
console.time("forArray");
forArray();
console.timeEnd("forArray");

console.time("forinArray");
forinArray();
console.timeEnd("forinArray");


console.time("forObject1");
forObject1();
console.timeEnd("forObject1");

console.time("forinObject1");
forinObject1();
console.timeEnd("forinObject1");


console.time("forObject2");
g();
console.timeEnd("forObject2");

console.time("forinObject2");
forinObject2();
console.timeEnd("forinObject2");
