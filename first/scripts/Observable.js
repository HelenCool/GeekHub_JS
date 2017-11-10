"use strict";
var obj = {
    aInternal: 10,
    aListener: function(val) {},
    set a(val) {
        this.aInternal = val;
        this.aListener(val);
    },
    get a() {
        return this.aInternal;
    },
    registerListener: function(listener) {
        this.aListener = listener;
    }
};
obj.registerListener(function(val) {
    console.log("The value has changed to " + val);
});

obj.a = 42;


