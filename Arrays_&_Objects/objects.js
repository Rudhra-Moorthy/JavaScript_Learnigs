let person = {
    "user name": "Rudhra",
    age: 21,
    hairColour: "Black",
    eyeColour: "Brown",
    eat: function() {
        return "I am eating Ice cream"
    },
    shoes: ["Addidas", "Puma", "Red Tape", "Asian"]
}
console.log(person);
console.log(person["user name"]);
console.log(person["age"]);
console.log(person.eat);
console.log(person["shoes"][person.shoes.length - 1]);

// Shorthand Assigned Property 
let name = "Deva";
let age = 21;
let person = {
    name,
    age
}
console.log(person);
console.log(person.name);
console.log(person.age);

// Dynamic Property
let name = "Hari";
let age = 22;
let dynamicProp = "employeeId";
let person = {
    name,
    age,
    ['dynamicProp']: "BZF101",
    [dynamicProp]: "BZF102"
}

console.log(person['dynamicProp']);
console.log(person[dynamicProp]);

// Mini challenge: 1
createStudentProfile("Rudhra", 22, "JavaScript");

/*{
  name: "Rudhra",
  age: 22,
  skill: "JavaScript",
  joined_2025: "Yes",
  skill_JavaScript: "active"
} */


function createStudentProfile(name, age, skill) {
    let year = new Date().getFullYear(); //  Get current year
    const profile = {
        name,                          // -> ShortHand
        age,                           // -> ShortHand
        skill,                        // -> ShortHand
        ["joined_" + year]: "yes",    // -> Dynamic
        ["skill_" + skill]: "active" // -> Dynamic
    }
    return profile;

}

console.log(createStudentProfile("Rudhra Moorthy", 21, "JavaScript")); */


// Mini challenge: 2
/* const student = createTracker("Rudhra", "JavaScript", "active");

console.log(student.status_JavaScript); // "active"
console.log(student.getSummary());
// "Rudhra is enrolled in JavaScript and the course is currently active." */

function createTracker(name, course, status) {
    const tracker = {
        name,
        course,
        ["status_" + course]: status,
        getSummary: function() {
            return `${this.name} is enrolled in ${this.course} and the course is currently ${this["status_" + this.course]}`;
        }
    };
    return tracker;
}

const student = createTracker("Rudhra", "JavaScript", "active");
console.log(student.status_JavaScript);
console.log(student.getSummary());


