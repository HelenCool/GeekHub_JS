var chars = [];
var object1 = {};
var object2 = {};

for (var j=0;j<100000-1;j++){
    chars[j]=String.fromCharCode(j);
}

for (var j=0;j<100000-1;j++){
    object1[j]="obj - "+String.fromCharCode(j);
}

for (var j =0; j<100000-1;j++){
    object2[j]= Math.random().toString();
}

var forArray = function() {
    for(var i=0;i<chars.length;i++) {
        chars[i]="new char = " + String.fromCharCode(j+1);
    }
    console.log(chars);
}

var forinArray = function(){
    for (var key in chars){
        chars[key]="new char = " + String.fromCharCode(j+1);
    }
    console.log(chars);
}

var forObject1 = function() {
    for(var i=0;i<object1.length;i++) {
        object1[i]="new obj = " + String.fromCharCode(j+1);
    }
    console.log(object1);
}

var forinObject1 = function(){
    for (var key in object1){
        object1[key]= "new obj = " + String.fromCharCode(j+1);
    }
    console.log(object1);
}

var forObject2 = function() {
    for(var i=0;i<object2.length;i++) {
        object2[i]= (Math.random()*100).toString();
    }
    console.log(object2);
}

var forinObject2 = function(){
    for (var key in object2){
        object2[key]= (Math.random()*100).toString();
    }
    console.log(object2);
}

forArray();
forinArray();
forObject1();
forinObject1();
forObject2();
forinObject2();
