"use strict";

// anonymous function

let m1 = function() {
    console.log("Anonymous function");
}

m1();

// callback function

function f1(m1) {
    m1()
}

f1(function(){console.log("Callback function")});

let x = 10 + m1() * 3;

console.log("Value of x =  " + x);

let y = 99

function getCircumference(r) {
    return 2 * Math.PI * Math.pow(r, 2);
}

let q1 = document.getElementById("q1");
q1.textContent = getCircumference(10);