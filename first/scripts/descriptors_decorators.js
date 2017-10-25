"use strict";

var cat = {
    //свойства объекта
    name: "Garfild",
    age: 5,
    numberOf: 8,
    breed: "munchkin",
    color: "grey",
    owner: "Max",
    lastDoctorVisit: new Date(2017, 4, 26),

    //методы объекта
    doctorVisiting: function(){
        var difference = new Date().getMonth() - this.lastDoctorVisit.getMonth()
      if (difference > 2)
          alert("Attention! Your cat needs healing! The last doctor appointment was "+ this.lastDoctorVisit.toLocaleString("en-US", options));
    },

    toString: function () {
        return "This is " + this.owner + "'s cat, named " + this.name + " of " + this.color + " color and " + this.breed + " breed";
    },

    valueOf: function () {
        return this.age;
    },

    toJSON: function(){
    var newString = {"name": this.name, "age": this.age, "owner": this.owner, "illnesses": ["allergy", "dry eye"],
        "vetDoctor": "Dr.Williams", "lastVaccination": new Date(2017, 3, 23), "lastDoctorVisit": this.lastDoctorVisit};
    return newString;
}
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
    writable: false,
    configurable: true
});

/*---Переопредиление сущесвующего свойства объекта---*/
Object.defineProperty(cat, "age", {
    get: function () {
        return new Date().getFullYear() - cat.timeOfBirth.getFullYear();
    }
});


cat.doctorVisiting();
alert(cat.age);
console.log(Number(cat));
console.log(String(cat));
console.log(JSON.stringify(cat));