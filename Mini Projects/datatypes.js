function checkType() {
    let input = document.getElementById("valueInput").value.trim();
    let result = document.getElementById("result");
    
    let value;
    // Try Parsing the input 
    try {
        value = eval(input);
    }
    catch(e) {
        value = input;  // fallback to string if invalid js values
    }

    // Get base type
    let type = typeof value;

    if(value === null) {
        type = "null";
    }
    else if(Array.isArray(value)) {
        type = "array";
    }
    else if(Number.isNaN(value)) {
        type = "NaN";
    }

    result.innerText = `Type: ${type}`;

}

// Primitive Data Types
let x = 10;
console.log(x)  // Number
console.log(typeof x);  // typeof operator -> defines the types of datatype in JS
console.log("==============================================");

let y = 'Hello'; // String -> denotes in "" or '' or ``
console.log(y); 
console.log(typeof y);
console.log("==============================================");

let z = true; // Booolean ->  true or false
console.log(z);
console.log(typeof z);
console.log("==============================================");

let n = null; // Null -> represents no value
console.log(n);
console.log(typeof n); // typeof null returns "object" due to a historical bug in JavaScript
console.log("==============================================");

let u = undefined; // Undefined -> variable declared but not initiaized
console.log(u);
console.log(typeof u); // undefined
console.log("==============================================");

let s = Symbol(123); // Symbol -> unique and immutable value    
console.log(s);
console.log(typeof s); // symbol
console.log("==============================================");

// Non primitive Data Types -> Reference types
let array = [1,"Hello",3,4,5,6]; // Array -> Collection of values
console.log(array);
console.log(typeof array); // object
console.log(Array.isArray(array)); // Check if it's an array
console.log("==============================================");

let object = {name: "Rudhra", age: 25}; // Object -> Collection of key-value pairs
console.log(object);
console.log(typeof object);