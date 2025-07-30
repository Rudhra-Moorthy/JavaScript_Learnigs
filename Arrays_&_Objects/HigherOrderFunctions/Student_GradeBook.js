// Students details

let students = [];

// to add a student
function addStudent(name, score) {
    students.push({ name, score });
    console.log(`${name} added with a score of ${score}.`);
}

// to calculate a average score 
function calculateAverage() {
    const total = students.reduce((sum, s) => sum + s.score, 0);
    return total / students.length;
}

//to detemine the status of each student
function checkResults() {
    console.log("\n 🎓 Pass/Fail Status:");
    students.forEach(student => {
        const status = student.score >= 50 ? "✅ Pass" : "❌ Fail";
        console.log(`${student.name} - ${student.score} → ${status}`);
    });
}

// to shop highest and lowest scores
function showTopBottom() {
    const sorted = [...students].sort((a, b) => b.score - a.scpre);
    const top = sorted[0];
    const bottom = sorted[sorted.length - 1];
    console.log(`\n🏆 Top Scorer: ${top.name} with a score of ${top.score}`);
    console.log(`\n📉 Bottom Scorer: ${bottom.name} with a score of ${bottom.score}`);
}

// 💡 Sample Usage:
addStudent("Rudhra", 87);
addStudent("Steve", 45);
addStudent("Maya", 65);
addStudent("Ajay", 92);
addStudent("Zara", 38);

console.log(`\n📊 Average Score: ${calculateAverage()}`);
checkResults();
showTopBottom();