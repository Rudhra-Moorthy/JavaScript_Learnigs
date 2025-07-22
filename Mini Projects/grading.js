function calculateGrade() {
    const sub1 = parseFloat(document.getElementById("subject1").value);
    const sub2 = parseFloat(document.getElementById("subject2").value);
    const sub3 = parseFloat(document.getElementById("subject3").value);
    const sub4 = parseFloat(document.getElementById("subject4").value);
    const sub5 = parseFloat(document.getElementById("subject5").value);

    if (isNaN(sub1) || isNaN(sub2) || isNaN(sub3) || isNaN(sub4) || isNaN(sub5)) {
        alert("Please enter valid numbers for all subjects.");
        return;
    }

    const average = (sub1 + sub2 + sub3 + sub4 + sub5) / 5;
    let grade;

    if (average >= 90) {
        grade = "A";
    }
    else if (average >= 80) {
        grade = "B";
    }
    else if (average >= 70) {
        grade = "C";
    }
    else if (average >= 60) {
        grade = "D";
    }
    else {
        grade = "F";
    }

    const passOut = average >= 60 ? "Pass" : "Fail";
    const result = `Average: ${average.toFixed(2)} -> Grade: ${grade}, Result: ${passOut}`;
    document.getElementById("result").innerText = result;
    console.log(result);
    alert(result);

}