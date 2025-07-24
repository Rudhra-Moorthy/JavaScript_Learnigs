// sort() ->  it sorts an array based on ASCII values, During sorting it converts the elements into String
let arr = [10,3,5,2,1, 100,35];
arr.sort();
console.log(arr);


// reverse() -> it reverses the array.
let arr1 = ["Rudhra","Dhili","Praveen","Bala"]; 
arr1.sort().reverse();
console.log(arr1);


// includes() -> This method checks whether the value is present in the array -> returns true if presents or returns false.
let arr2 = [12,45,86,46,87];
let presented = arr2.includes(465);
console.log(presented);

// join() -> It converts an array into String
let arr3 = [23,65,77,34,78];
let joinedString = arr3.join("0");
console.log(joinedString);