"use strict";

var a = 3;
var b = 7;

(function () {
    var b = 5;
    console.log(a);
    console.log(b);
})();

console.log(b);