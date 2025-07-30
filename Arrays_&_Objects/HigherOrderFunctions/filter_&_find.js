/* Mini challenge -> Using filter and find 
🎯 Tasks:
1. Use filter() to get all students who got grade "A".

2. Use find() to get the student with marks less than 60.

3. Use filter() to return all students with marks greater than or equal to 75.

4. Find the student whose name is "Raja" and print their full info.*/

/* 
Task 1 -> [ { id: 101, name: "Ravi", grade: "A", marks: 91 }, { id: 105, name: "Arjun", grade: "A", marks: 95 } ]

Task 2 -> { id: 106, name: "Manoj", grade: "C", marks: 55 }

Task 3 -> [ { id: 101, ... }, { id: 102, ... }, { id: 104, ... }, { id: 105, ... } ]

Task 4 -> { id: 104, name: "Radha", grade: "B", marks: 78 } 
*/


const students = [
    { id: 101, name: "Ravi", grade: "A", marks: 91 },
    { id: 102, name: "Sneha", grade: "B", marks: 75 },
    { id: 103, name: "Kiran", grade: "C", marks: 62 },
    { id: 104, name: "Radha", grade: "B", marks: 78 },
    { id: 105, name: "Arjun", grade: "A", marks: 95 },
    { id: 106, name: "Manoj", grade: "C", marks: 55 },
];

// use Use filter() to get all students who got grade "A".
const gradeA = students.filter(student => student.grade === "A");
console.log(gradeA);

// Students who scored mark less than 60
const lessThan60 = students.find(student => student.marks < 60);
console.log(lessThan60);

// Students with marks greater than or equal to 75
const greaterThan75 = students.filter(student => student.marks >= 75);
console.log(greaterThan75);

// Find the student whose name is "Radha"
const studentNameMatch = students.find(student => student.name === "Radha") || "Not Found";
console.log(studentNameMatch);

