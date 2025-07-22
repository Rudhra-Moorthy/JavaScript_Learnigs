// Destructuring -> Unpacking values from the arrays or proprties of an Object into individual Variables


// -> Destructuring in Arrays
let arr = [1,2,3,4,5,6];
let [a,b,c,d,e,f] = arr;
console.log(a,b,c,d,e,f);

// Skipping Values 
let [first, , , fourth, , ] = arr;
console.log(first, fourth);

// Default values
let [x, y = 5] = [10];
console.log(x, y);

// Nested Array
let numbers = [1,2,3,4,5,[10,20,30,40,[100,200]]];
let [a1,b1,c1,d1,e1,[a2,b2,c2,d2,[a3,b3]]] = numbers;
console.log(a1, a2, a3);

//Mini Challenge -> Top 3 Scorer
const scores = [95, 87, 76, 65, 59, 45]; 
/* "-> What if they give you unsorted array, Sort array in Descending Order then destructure the first three scores"
  unsortedScores = [67, 34, 89, 90, 99, 100, 78]*/
const[Ist, IInd, IIIrd] = scores;
console.log(`🏆 1st: ${Ist}`);
console.log(`🥈 2nd: ${IInd}`);
console.log(`🥈 3rd: ${IIIrd}`);

// -> Destructuring in Objects

let employee = {
    id: "BZF123",
    name: "X",
    accountDetails: {
        accNo: 245363,
        accName: "Rudhra",   // -> Nested Destructuring
        branch: "Chennai"
    }
}

const {name: username, id, accountDetails: { accNo, branch, accName}} = employee;
console.log(username, id, accName, accNo);
