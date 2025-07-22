// Conditional Statements

// 1. If Statement

let age = 20;
if(age >= 18) {
    console.log("You are eligible to vote.");
}

// 2. If-Else Statement
let score = 35;
if(score >= 45) {
    console.log("You are passed in the exam.");
}
else {
    console.log("You are failed in the exam.");
}

// 3. If-Else If-Else Statement
let marks = 60;
if(marks >= 90) {
    console.log("Grade: A+");
}
else if(marks >= 80 && marks < 90) {
    console.log("Grade: A");
}
else if(marks >= 70 && marks < 80) {
    console.log("Grade: B+");
}
else if(marks >= 60 && marks < 70) {
    console.log("Grade: B");
}
else {
    console.log("Failed");
}

// 4. Nested If statement
let temperature = 27;
if(temperature > 25) {

    console.log("It's warm outside.");
    if(temperature > 30) {
        console.log("It's quite hot.");
    }
    else {
        console.log("It's a pleasant day.");
    }
}

// 5. Switch Statement

let trafficLight = "yellow";
switch(trafficLight) {
    case "red":
        console.log("Stop");
        break;
    case "yellow":
        console.log("Get ready to go");
        break;
    case "green":
        console.log("Go");
        break;
    default:
        console.log("Pay fine");
}
