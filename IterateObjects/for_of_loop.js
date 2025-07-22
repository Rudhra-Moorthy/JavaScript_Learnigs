// Enhanced version of for loop -> for of loop

let arr = [10,100,1000,10000];
let sum = 0;
for(let val of arr) {
    sum += val;
};
console.log(sum);

// String

let str = "JavaScript";
for(let char of str) {
    console.log(char);
};

// functions

function* generator() {
    yield 1;
    yield 2;
    yield 3;
}
let id = generator();

for(let iterator of id) {
    console.log(iterator);
}

// Objects -> TypeError 
let obj = {
    id: 1,
    name: "Rudhra"
};
for(let key of obj) {
    console.log(key);
}