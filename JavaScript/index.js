let age = 25;
const name = "Rudhra";
var status = "Learning JavaScript";

console.log(`${name}, age ${age}, is currently ${status}`);

var year = 2023; // Declaration and initialization
var year; // Declaration
//year = 2024; // Reassignment
var year = 2024;
year = "Hundred"; // Reassignment to a different type
console.log(year);
console.log(y);
var y = 20;
//console.log(y); // Output: 20


// let -> keyword -> Can be reassigned, but cannot be redeclared.
//console.log(x);
//console.log(x); -> ReferenceError: x is not defined
let x = 10;
x = 20;
x = 30;
console.log(x);

// const -> Keyword -> Cannot be reassigned, also cannot be redeclared.
const pi = 3.14;
//pi = 3.14159; // This will throw an error because pi is a constant
console.log(pi);

//
const person = { name: "Rudhra" };
person.name = "Jarvis";
console.log(person.name);

// Printing Statements
//console.log("Hello Wolrd!");
//console.log("Hello, " + name + "! You are " + age + " years old.");
//alert("Hello," + name);
//confirm("Are you sure you want to proceed?");
//document.write("Hello, " + name + " is learning JavaScript!");
//document.writeln("Hello, " + name + " is learning JavaScript!");

//let z = prompt("Enter your name:");
//console.log(z);

setInterval(() => {
    document.querySelector("h1").innerHTML = "Welcome to JavaScript!";
}, 5000);

