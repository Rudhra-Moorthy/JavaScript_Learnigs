// reduce() -> used to reduce the array into a single value by a callback on each element

// Ex: Count Occurrences of Grades

const grades = ["A","B", "C", "A", "B", "C", "A"];
const gradeCount = grades.reduce((acc, grade) => {
    acc[grade] = (acc[grade] || 0) + 1;
    return acc;
}, {});
console.log(gradeCount); // {A: 3, B: 2, C: 2}

// Ex: Group Products by Category

/* Output:
{
  Electronics: ["Keyboard", "Mouse"],
  Clothing: ["Shirt", "Jeans"]
} 
  */


const products = [
    { name: "Keyboard", category: "Electronics" },
    { name: "Shirt", category: "Clothing" },
    { name: "Mouse", category: "Electronics" },
    { name: "Jeans", category: "Clothing" },
];

const groupedProducts = products.reduce((acc, product) => {
    if (!acc[product.category]) {
        acc[product.category] = [];
    }
    acc[product.category].push(product.name);
    return acc;
}, {});
console.log(groupedProducts);

// Ex: Average of Student Marks

const students = [
    { name: "Ravi", marks: 91 },
    { name: "Sneha", marks: 75 },
    { name: "Kiran", marks: 62 },
];

const averageMarks = students.reduce((acc, student) => acc + student.marks, 0) / students.length;
console.log(averageMarks); // 76