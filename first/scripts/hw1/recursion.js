// /*function count(number) {
//     if (number === 0) {
//         console.log("Something goes wrong");
//     } else {
//         var newNumber = number - 1;
//         console.log("Hey," + newNumber);
//         count(newNumber);
//     }
// }
// count(8);

/* запись многомерного массива в одномерный при помощи рекурсии*/
var twoDimensional = [[1, 2], [3, 4], 5];
var oneDimensional = [];

function convertArray(input) {
    input.forEach(function (item) {
        if (Array.isArray(item)) {
            convertArray(item);
        } else {
          oneDimensional.push(item);
        }
    });
}

convertArray(twoDimensional);
console.log(oneDimensional);
