/* // Uncurrying function 

function add(a, b, c) {
    return a + b + c;
}

console.log("Uncurring Function", add(1,2,3));

// Currying function 

function add1(a) {
    return function(b) {
        return function(c) {
            return(a + b + c)
        }
    }
}

console.log("Currying function", add1(10)(20)(30)); */

// Slef Invoked Function

/* (function(a,b) {
    console.log("I am a self invoked function" , (a + b));
})(10, 5); */


// Closure
function outer() {
    let counter = 0;
    return function inner() {
        counter++;
        console.log(counter);
    }
}

let count = outer();
count(); // counter -> 1
count(); // counter -> 2