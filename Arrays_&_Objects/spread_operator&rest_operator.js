// Spread Operator is used to merge two arrays or clone the array to other array.

// Spread Operator with Arrays
let hobbies =["Cricket", "Basketball", "Volleyball"];
let capability = ["Reader", "Writer"];

let newArray = [...hobbies, ...capability];
hobbies[0] = "Apple";
let newArray1 = [...newArray, "Vodeo Recording", "Content Creator"];
console.log(newArray, hobbies);
console.log(newArray1);

// Spread Operator with Object
let user = {name: "Rudhra", age: 21};
let extra = {course: "JavaScript"};

let combined = {...user, ...extra};
console.log(combined);

// Spread Operator with String
let str ="Hello";
let chars = [...str];
console.log(chars);
