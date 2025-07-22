/* Type Conservion -> Converting one data type into another data type
JavaScript has dynamic typing, meaning variables can hold any type of data and can change types */

/* Types -> Implicit & Explicit type conversions */

// Implicit Type Conversion (Coercion)
let str = "5";
let num = 10;
// String
// 1. String + number -> String
console.log(str + num);
console.log(num - str); // 10 - 5 = 5 (Number subtraction)
console.log(typeof(str + num));// 510 (String concatenation) -> If you concat any datatype with string, it may result in String datatype.

// 2. String + boolean -> String
console.log(str + true);
console.log(str - true); // 5 - 1 = 4
console.log(typeof(str + true)); // 5true (String concatenation)

// 3. String + null -> String
console.log(str + null);
console.log(str - null); // 5 - 0 = 5;
console.log(typeof(str + null)); // 5null (String concatenation)

//4. String + undefined -> String
console.log(str + undefined);
console.log(str - undefined); // 5 - NaN = NaN
console.log(typeof(str + undefined)); // 5undefined (String concatenation)

// 5. String + object -> String
let obj = {name: "Rudhra"};
console.log(str + obj);
console.log(typeof(str + obj)); // [object Object] (String concatenation)

// 6. String + array -> String
let arr = [1,2,3];
console.log(str + arr);
console.log(typeof(str + arr)); // 51,2,3 (String concatenation)

// 7. String + function -> String
function greet() {
    return "Hello";
}
console.log(str + greet());
console.log(typeof(str + greet)); // 5function greet() { return "Hello"; }

// Number
// 1. Number + string -> string
console.log(num + str);
console.log(typeof(num + str)); // 105 (String concatenation)

// 2. Number + boolean -> number
console.log(num + true);   // true -> 1, false -> 0
console.log(typeof(num + true)); // 11 (Number addition)

// 3. Number + null -> number
console.log(num + null);   // null -> 0
console.log(typeof(num + null)); // 10 (Number addition)

// 4. NUmber + undefined -> NaN
console.log(num + undefined); // undefined -> Not a Number
console.log(typeof(num + undefined)); // NaN (Not a Number)

// 5. Number + Object -> String
console.log(num + {name: "Rudhra"}); // Object -> Not a Number
console.log(typeof(num + {})); // String (Not a Number)

// 6. Number + Array -> String
console.log(num + [1,2]); // Array -> Not a Number
console.log(typeof(num + [1,2])); // 10 (String concatenation)

// Boolean
// 1. Boolean + string -> String
console.log(true + "Hello");
console.log(typeof(true + "Hello")); // String

// 2. Boolean + Number -> Number
console.log(true + 10); // true -> 1
console.log(typeof(true + 10)); // Number

// 3. Boolean + null -> Number
console.log(true + null); // null -> 0
console.log(typeof(true + null)); // Number

// 4. Boolean + undefined -> NaN
console.log(true + undefined); // undefined -> Not a Number
console.log(typeof(true + undefined)); // NaN (Not a Number)

// 5. Boolean + Object -> String
console.log(true + {name: "Rudhra"}); // Object -> Not a Number 
console.log(typeof(true + {})); // String (Not a Number)

// 6. Boolean + Array -> String
console.log(true + [1,2]); // Array -> Not a Number
console.log(typeof(true + [1,2])); // String (Not a Number)