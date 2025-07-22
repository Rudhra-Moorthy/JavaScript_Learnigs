/* function* generator(limit = 3) {
    let count = 0;
    while(count < limit) {
        const otp = Math.floor(1000 + Math.random() * 9000);
        yield `Your OTP is ${otp}`;
        count++;
    }
    return "🚫 OTP limit reached. Try again later.";
} */

/* const otp = generator();
console.log(otp.next().value); // Your OTP is xxxx
console.log(otp.next().value); // Your OTP is yyyy
console.log(otp.next().value); // Your OTP is zzzz
console.log(otp.next().value); // 🚫 OTP limit reached. Try again later.
console.log(otp.next().value); // Undefined
console.log(otp.next().value); // Undefined
 */
// console.log(Math.random());

/* function* generator(limit = 3) {
    let count = 0;
    let currentOtp = null;
    while(count < limit) {
        currentOtp = Math.floor(1000 + Math.random() * 9000);
        const userInput = yield `OTP sent: ${currentOtp}`;
        
        if(parseInt(userInput) === currentOtp) {
            return "✅ OTP is verified Successfully!";
        }
        else {
            count++;
            return `🚫 Invalid OTP. Attempts remaining: ${limit - count}`;
        }
    }
    return "🚫 Too many attempts. Try again later";
}

const getOtp = generator();
console.log(getOtp.next().value); */

let currentOtp = "";

function* generator(limit = 3) {
    let count = 0;
    while(count < limit) {
        const otp = Math.floor(1000 + Math.random()*9000);
        currentOtp = otp.toString();
        yield otp;
        count ++;
    }
    return null;
}

let otpGenerator = generator();
function sendOtp() {
    const next = otpGenerator.next();
    if(!next.done) {
        alert(`🔐 Your otp is send: ${next.value}`);
        document.getElementById("message").textContent = "OTP sent Successfully!";
    }
    else {
        document.getElementById("message").textContent = "🚫 OTP limit is reached!";
    }
}

function validateOtp() {
    const userInput = document.getElementById("otpInput").value;
    if(userInput === currentOtp && currentOtp !== "") {
        document.getElementById("message").textContent = "✅ OTP Verified!";
    }
    else if (currentOtp === ""){
        document.getElementById("message").textContent = "❗No OTP generated!";
    }
    else {
        document.getElementById("message").textContent = "❌ Invalid OTP!"
    }
}