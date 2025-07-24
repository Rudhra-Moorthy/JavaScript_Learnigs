// Mini porject using array methods -> map(), sort(), slice(), reduce(), filter(), forEach(), find()

/*
1. Display top scorers

2.Show total class score

3. Search a specific student

4.Filter students above a threshold 
*/

const students = [
    { id: 1, name: "Jarvis", score: 87 },
    { id: 2, name: "Steve", score: 78 },
    { id: 3, name: "Amir", score: 89 },
    { id: 4, name: "Deva", score: 67 },
];

// 1. To find the total class score
const totalScore = students.reduce((total, curr) => total + curr.score, 0);
console.log(`Total class Score: ${totalScore}`);

// 2. Top 3 scorers
let topScorers = [...students].sort((a, b) => b.score - a.score).slice(0, 3);
console.log("🏆 Top 3 Scorers:");
topScorers.forEach((s, i) => console.log(`${i + 1}. ${s.name} - ${s.score}`));

// Filter Students above 85
let filteredStudents = students.filter(s => s.score > 85);
console.log("🎯 Students scoring above 85:");
filteredStudents.forEach(s => console.log(`${s.name} - ${s.score}`));

// Find a specific student by name
const sName = "Jarvis";
const sStudent = students.find(s => s.name === sName);
console.log("🔍 Search Result: ", sStudent ? sStudent : "Not Found");

// Show Names with Emoji using map
const funNames = students.map(s => `🤖 ${s.name}`);
console.log("👥 Fun Names:", funNames);
