// forEach() -> Which takes a callback function and applies it to each element in the array.

const fruits = ["Apple", "Banana", "Pomegranate", "Cherry"];
let newFruits = fruits.forEach(printFruit);
console.log(newFruits); // undefined, as forEach does not return a new array

function printFruit(currFruit, index, totalArray) {
    console.log(currFruit, index, totalArray);
}

fruits.forEach(currFruit => console.log(currFruit === "Apple"));

// map -> Which creates a new array populated with the results of calling a provided function on every element in the calling array.
let newArr = fruits.map(function (currFruit, index) {
    return {id: index + 1, fruit: currFruit};
});
console.log(newArr);

let newArr2 = fruits.map(currFruit => { return currFruit === "Apple" });
console.log(newArr2); // -> [true, false, false, false]

// Chaining forEach and map

//-> forEach
let chainingForEach = fruits.forEach(currFruit => console.log(currFruit.toUpperCase()));   // .sort(); -> TypeError
console.log(chainingForEach); // -> undefined.

// -> map 
let chainingMap = fruits.map(currFruit => currFruit.toUpperCase()).sort();
console.log(chainingMap); // -> ["APPLE", "BANANA", "CHERRY", "POMEGRANATE"]
