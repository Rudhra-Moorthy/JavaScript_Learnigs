// sort(CompareFn ?: value, value)

let arr = [34, 67, 23, 56, 32, 767, 245, 12, 45, 78];

/* 
Ascending order
a - b -> +ve -> Swap
a - b -> -ve -> no Swap 
a - b -> 0 -> no Swap
a - b -> NaN -> no Swap
*/

let ascendingArray = arr.sort((a, b) => a - b);
console.log("Ascending Order:", ascendingArray);

let newArr = [34, 46, 23, 65, 12, 15, true, false, "hello", "100", undefined, null, NaN];

/* 
Descending order
b - a -> +ve -> Swap
b - a -> -ve -> no Swap 
b - a -> 0 -> no Swap
b - a -> NaN -> no Swap
*/

let descendingArray = newArr.sort((a, b) => b - a);
console.log("Descending Order:", descendingArray);

// some(PredicateFn: (value, index, array) => boolean)

let someArray = [34, 67, 23, 56, 32, 12, 45, 78];
let isGreaterThan100 = someArray.some((value) => value > 100);
console.log("Is there any value greater than 100 ? -> ", isGreaterThan100);

// every(PredicateFn: (value, index, array) => boolean)
let everyArray = [34, 67, 23, 56, 32];
let isAllGreaterThan20 = everyArray.every((value) => value < 20);
console.log("Are all values greater than 20 ? -> ", isAllGreaterThan20);