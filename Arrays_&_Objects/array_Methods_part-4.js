/* indexOf() -> This method finds the index of the elements, starts the execution from the beginning of the array 
if the value is not present in the arr when using indexOf(), which returns -1. */

const arr = [10, 20, 30, 40, 10, 60, 70];
let num = arr.indexOf(10, -3); 
console.log(num);

// lastIndexOf() -> This method starts the execution from the Right to Left.

let lastIndex = arr.lastIndexOf(30, 5);
console.log(lastIndex);