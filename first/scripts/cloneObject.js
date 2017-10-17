var cat = {
    name: "Garfild",
    age: 5,
    breed: "munchkin",
    color: "grey",
    owner: "Max"
};

var clonedCat = {};

for (var key in cat) {
        clonedCat[key] = cat[key];
    console.log("Ключ: " + key + " значение: " + clonedCat[key]);
}