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
