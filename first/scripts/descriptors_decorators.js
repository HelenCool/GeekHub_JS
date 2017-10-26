"use strict";
function Cat() { };

/*---------фабричные методы:-------*/
    Cat.createGirl = function(smth1){
       var catGirl = new Cat;
        catGirl.wearsDress = true;
        catGirl.name = smth1.name;
        catGirl.age = smth1.age;
        catGirl.numberOfOwners = smth1.numberOfOwners;
        catGirl.breed = smth1.breed;
        catGirl.color = smth1.color;
        catGirl.sex = smth1.sex;
        catGirl.owner = smth1.owner;
        catGirl.lastDoctorVisit = smth1.lastDoctorVisit;
        return catGirl;
    };

    Cat.createBoy = function(smth2){
        var catBoy = new Cat();
        catBoy.wearsDress = false;
        catBoy.name = smth2.name;
        catBoy.age = smth2.age;
        catBoy.numberOfOwners = smth2.numberOfOwners;
        catBoy.breed = smth2.breed;
        catBoy.color = smth2.color;
        catBoy.sex = smth2.sex;
        catBoy.owner = smth2.owner;
        catBoy.lastDoctorVisit = smth2.lastDoctorVisit;
        return catBoy;
    };


var cat = Cat.createBoy({
    //свойства объекта
    name: "Garfild",
    age: 5,
    sex: "male",
    numberOfOfOwners: 4,
    breed: "munchkin",
    color: "grey",
    owner: "Max",
    lastDoctorVisit: new Date(2017, 4, 26)
});

//методы объекта
cat.doctorVisiting = function () {
    var difference = new Date().getMonth() - this.lastDoctorVisit.getMonth();
    if (difference > 2)
        alert("Attention! Your cat needs healing! The last doctor appointment was "+ this.lastDoctorVisit.toLocaleString("en-US", options));
};

cat.toString = function () {
    return "This is " + this.owner + "'s cat, named " + this.name + " of " + this.color + " color and " + this.breed + " breed";
};


cat.toJSON = function () {
    var newString = {"name": this.name, "age": this.age, "owner": this.owner, "illnesses": ["allergy", "dry eye"],
        "vetDoctor": "Dr.Williams", "lastVaccination": new Date(2017, 3, 23), "lastDoctorVisit": this.lastDoctorVisit};
    return newString;
};

cat.valueOf = function () {
    return this.age;
};

var options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "long",
    timezone: "UTC"
};

/*-----------Добавление нового свойства-------------*/
Object.defineProperty(cat, "timeOfBirth", {
    value: new Date(2015, 5, 15, 6, 3),
    writable: false,                                  // свойство нельзя менять, но можно удалить и поменять другим дескриптором
    configurable: true
});

/*---Переопредиление сущесвующего свойства объекта---*/
Object.defineProperty(cat, "age", {
    get: function () {
        return new Date().getFullYear() - cat.timeOfBirth.getFullYear();         //свойство теперь высчитывается функцией
    }
});

//методы не будут перечислятся в функции Object.keys внизу


// ВОПРОС: почему, если они будут enumerable, то ф-ции toString, valueOf, toJSON не сработают. Почему???

// Object.defineProperty(cat, "toString", {
//     value: new Date(2015, 5, 15, 6, 3),
//     enumerable: false
// });
// Object.defineProperty(cat, "valueOf", {
//     value: new Date(2015, 5, 15, 6, 3),
//     enumerable: false
// });
// Object.defineProperty(cat, "toJSON", {
//     value: new Date(2015, 5, 15, 6, 3),
//     enumerable: false
// });

var cat1 = Cat.createGirl({
    name: "Lia",
    age: 2,
    color: "red",
    sex: "female"
});

Object.defineProperty(cat1, "likes", {
    value: "Fish, Wiskas",
    writable: false,              // свойство нельзя ни менять, ни удалять, свойство-константа
    configurable: false
});


cat.doctorVisiting();

console.log(Number(cat));
console.log(String(cat));
console.log(JSON.stringify(cat));


/*-----декоратор, который запрещает вход мальчикам----*/
function sexCheck(func) {
    return function (obj) {
            if(obj.sex==="female"){
            return func.apply(this, arguments);
        }
        alert("Boys are forbidden!!!");
    }
};

function girlsSecrets(obj) {
    console.log("Have a nice day, " + obj.name + "!");
}
girlsSecrets = sexCheck(girlsSecrets);
girlsSecrets(cat);
girlsSecrets(cat1);


/*-----декоратор, передающий дополнительные параметры-----*/
function newFunc(f) {
    var keys = Object.keys(cat);
    return function () {
        var newKeys = arguments;
        Array.prototype.push.apply(newKeys, keys);
        f.apply(this, newKeys);
    }

};

function a(){
    var str ="";
    for(var i=0;i<arguments.length;i++){
        str += arguments[i]+", ";
    }
    alert(str);
}

var b = newFunc(a,Object.keys(cat));
b(Object.keys(cat1));
