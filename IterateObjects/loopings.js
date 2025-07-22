// For-loop

for(let i = 1; i <= 10; i++){
    console.log(i);
};

// While-loop
let val = 10;
while(val > 0) {
    console.log(val);
    val--;
}

// To find the sum of the Number -> num = 34647 -> 24
let num = 34647;
let originalNum = num;
let sum = 0;
while(num > 0) {
    sum += num % 10;
    num = parseInt(num / 10);
}
console.log(`Sum of the ${originalNum} is ${sum}`);
