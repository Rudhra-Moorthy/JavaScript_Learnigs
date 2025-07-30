/* 🧩 Tasks to solve:
1. Filter all students with marks ≥ 75.

2. Sort the filtered list in descending order of marks.

3. Map to return only names and marks: -> Example: { name: "Arjun", marks: 95 }

4. Find the student who scored exactly 91.

5. 💡 Bonus: Add a new field called status as "Pass" for marks ≥ 60, else "Fail" using map(). */



const students = [
  { id: 101, name: "Ravi", grade: "A", marks: 91 },
  { id: 102, name: "Sneha", grade: "B", marks: 75 },
  { id: 103, name: "Kiran", grade: "C", marks: 62 },
  { id: 104, name: "Radha", grade: "B", marks: 78 },
  { id: 105, name: "Arjun", grade: "A", marks: 95 },
  { id: 106, name: "Manoj", grade: "C", marks: 55 },
  { id: 107, name: "Divya", grade: "A", marks: 88 },
];

// 1. Students with marks ≥ 75.
const topStudents = students.filter(student => student.marks >= 75);
console.log("Toppers:", topStudents);

// 2. Sorts them in Descending order of marks.
topStudents.sort((a, b) => b.marks - a.marks);

// 3. Map to return only names and marks of Students
const leaderBoard = topStudents.map(students => ({name: students.name, marks: students.marks}));
console.log("🎯 Leaderboard:");
console.log(leaderBoard);


// 4. he student who scored exactly 91.
const studentWith91 = students.find(student => student.marks === 91);
console.log("\n🔍 Student with exactly 91 marks:");
console.log(studentWith91? studentWith91 : "Not Found");

// 5. Bonus: Add a `status` field based on pass/fail.
const statusList = students.map((students) => ({name: students.name, status: students.marks >= 60 ? "Pass" : "Fail"}));
console.log("\n💡 Status List:");
console.log(statusList);