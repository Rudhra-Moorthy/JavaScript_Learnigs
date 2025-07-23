// concat() -> This method used to merge two arrays which forms a new Array.

let arr = [1,2,3,4];
let arr2 = [4,5,6,7,8];
let newArr = arr.concat(arr2);
arr[0] = 101;
console.log(newArr, arr);

// slice(start, end) -> This method is used to return a part of a array without modifying an original array.

let newArr1 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
let slicedArr = newArr1.slice(1, 5); // -> slice(start, end - 1)
console.log(slicedArr);

// flat() -> This method is used to flattens the nested array into a single array.
let nestedArr = [1,2,3,4,[5,6,7,8,[9,10,11,12,13,[14,15,16,17]]]];
let flattenedArr = nestedArr.flat(Infinity);
console.log(flattenedArr);

// fill() -> This method is used to replace the values in the array.
let array = [10, 20, 30];
array.fill(101, 0, 2);
array.fill(103, 2, 3);
console.log(array);