// for..in..loop -> To overcome the drawback of for-of loop, "using to iterate objects, it may throw TypeError".

let person = {
    name: "Rudhra",
    age: 21,
    hobbies:["Cricket", "Movies", "Songs"],
    familyDetails: {
        totalMembers: 5,
        siblings: ["Dhachu", "Adhi"]
    },
    walk() {
        console.log("I am going to home by walk");
    }
}

for(let key in person) {   // -> returns keys as String
    console.log(`${key}: ${person[key]}`);  
}

 // Array -> for..in..loop (Same for String)
 let arr = [10,20,30,40];
 for(let key in arr) {
    console.log(arr[key]);
 }