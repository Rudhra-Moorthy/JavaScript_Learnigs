let person = {
    name: "John",
    age: 30
}

function printDetails(name, age) {
    if(age < 30) {
        console.log(`Name: ${name}, Age: ${age}`);
    }

}

printDetails(person.name, person.age);
printDetails("Deva", 30);
printDetails("Rudhra", 21);
printDetails("Bala Kumar", 21);

// Default Parameters

function details(name = "Guest", age = 30) {
    console.log(`Hi, I am ${name} and my age is ${age}`);
}

details("Rudhra", 21);
details(undefined, 21);
details("Deva", undefined);  // either use undefined or don't use undefined
details(undefined, undefined);

// Default value for variables ->  By using || operator

let empId ;
let newId = empId || "BZF100";
console.log(newId);

// Return and Non-return Type functions

function findArea(l, b) {
    return l * b;
}

console.log(findArea(5,6));

/* Higher Order Function ->  the function which has the another function as a argument, which function is called Higher Order Function
Call Back Function -> the funtion that is passed as a argument to the another function, which is called as Call Back Function */

function function1() {
    console.log("I am a higher order function");
}

function function2() {
    console.log("I am a call back function");
}

function1(function2());

//Another example 

function add(callback, a, b) {
    console.log(a + b);
    callback(a, b);
}

function subtract(a, b) {
    console.log(a - b);
}

add(subtract, 20, 10);
