// List of students

const students = [
    { name: "Rudhra", score: 92 },
    { name: "Steve", score: 85 },
    { name: "Jarvis", score: 97 },
    { name: "Natasha", score: 45 },
    { name: "Tony", score: 59 }
];

//forEach() -> to print log message
students.forEach((student) => {
    const msg = student.score >= 60 ? "✅ Passed" : "❌ Failed";
    console.log(`${student.name} scored ${student.score} - ${msg}`);
});

// use map() -> to create a list of student names those who passed.
const passedStudents = students.filter(student => student.score >= 60).map(student => student.name);
console.log("Students who passed: ", passedStudents);

// use map() -> to create a list of student names those who failed.
const failedStudents = students.filter(student => student.score < 60).map(student => student.name);
console.log("Students who failed: ", failedStudents);