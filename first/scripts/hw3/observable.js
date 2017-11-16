var me = {
    firstName: "Alyona",
    lastName: "Bochkaryova",
    age: 22
};


function observable(obj) {
    for (var key in obj) {
        Object.defineProperty(obj, key, {
            get: function () {
                return this.value;
            },
            set: function (val) {
                this.value = val;
                console.log("the value has changed")
            }
        })
    }
}

observable.bind(me);
observable(me);
me.firstName = "Mary";
me.lastName = "Sampir";
me.age = "18";