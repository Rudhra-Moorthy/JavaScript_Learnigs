function generateBio() {
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const profession = document.getElementById("profession").value;
    const hobbies = document.getElementById("hobby").value;

    if (!name || !age || !profession || !hobbies) {
        alert("Please fill in all fields.");
        return;
    }

    const bio = `👋 Hi, I'm ${name}. I'm ${age} years old and I work as a ${profession}. 
In my free time, I love ${hobbies}. 😊`;

    document.getElementById('bio').innerText = bio;
    console.log(bio);
    alert("Bio generated successfully!");
}