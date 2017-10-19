function count(number) {
    if (number === 0) {
        console.log("Something goes wrong");
    } else {
        var newNumber = number - 1;
        console.log("Hey," + newNumber);
        count(newNumber);
    }
}
count(8);
=======
/* рекурсивно раскладывает двухмерный массив в одномерный */

var first = ["a", "b", "c"];
var second = ["d", "e", "f"];
var third = ["g", "h", "i"];

var alph = [first, second, third];
console.log(alph);
