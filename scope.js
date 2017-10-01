(function() { // IIFE
    // 'use strict'  

    var z = 1;
    
    one();
    two();
    three();



    function one() {
        var x = 3
        console.log('x: ' + x);
    }
    // console.log('x: ' + x); // not defind

    function two() {
        y = 5
        console.log('y: ' + y); 
    }
    console.log('y: ' + y); 

    function three() {
        console.log('z: ' + z); 
    }
    console.log('z: ' + z); 
}());

function test() {
    var x = t = 5;
    console.log(x);
}
test();
console.log('t: ' + t);
// console.log(x); //not defind


{
    var tt = 5;
    let yy = 4;
}

console.log('tt: ' + tt);
// console.log('yy: ' + yy);

const MAX_AGE_FOR_USER = 18;
const VAT = 17;
const myObj = {
    a: 3
}
// VAT = 18; //error
myObj.a = 6;
console.log(myObj.a);




/* let VS. var */
function letVsVar() {
    for(var i=0; i < 5; i++) {
        setTimeout(function() {
            console.log('i: ' + i);
        }, i * 1000)
    }

    for(let j=0; j < 5; j++) {
        setTimeout(function() {
            console.log('j: ' + j);
        }, j * 1000)
    }
}









