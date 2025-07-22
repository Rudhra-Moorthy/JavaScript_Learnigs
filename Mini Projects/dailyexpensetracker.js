const expenseHistory = [];

function calculateExpenses() {
    const day1 = parseFloat(document.getElementById("day1").value);
    const day2 = parseFloat(document.getElementById("day2").value);
    const day3 = parseFloat(document.getElementById("day3").value);

    if(isNaN(day1) || isNaN(day2) || isNaN(day3)) {
        alert("Please enter valid numbers for all days.");
        return;
    }
    
    const total = day1 + day2 + day3;
    const average = total / 3;

    const status = average <= 1000 ? "✅ Good Job! You're within budget." : "❌ Warning! You're over budget.";

    const currentEntry = {
        day1: day1, day2: day2, day3: day3, total,average: average.toFixed(2), status
    };
    expenseHistory.push(currentEntry);

    const message = `Total Expenses: ₹${total}, Average Daily Expense: ₹${average.toFixed(2)} -> ${status}`;
    document.getElementById("expense").innerText = message;
    console.log(message);
    alert(status);

    showHistory();
}

function showHistory() {
    const historyDiv = document.getElementById("history");
    historyDiv.innerHTML= "";

    expenseHistory.forEach((entry, index) => {
        const html = `
          <div class="entry">
            🔢 Entry ${index + 1}: 
            Day1: ₹${entry.day1}, Day2: ₹${entry.day2}, Day3: ₹${entry.day3}<br>
            💰 Total: ₹${entry.total}, 📊 Average: ₹${entry.average} → ${entry.status}
          </div>
        `;
        historyDiv.innerHTML += html;
    });

}