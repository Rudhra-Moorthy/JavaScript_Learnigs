function createLocker(secretPin) {
    let attempts = 0;
    let locked = false;
    return function(enteredPin) {
        if(locked) {
            return "🔒 Locker is permanently locked due to too many failed attempts";
        }
        if(enteredPin === secretPin) {
            attempts = 0; // Reset the resources
            return function(secretMessage) {
                return `🔓 Access Granted: ${secretMessage}`
            };
        }
        else {
            attempts++;
            if(attempts >= 3) {
                locked = true;
                return "❌ 3 wrong attempts! Locker is now locked.";
            }
            return `❌ Access Denied! Attempted ${attempts} times out of 3`;
        }
    }
}

let locker = createLocker("1202");
console.log(locker("1111")); // Attempt 1
console.log(locker("1202")("The Treasure is under bed")); // Attempt 2
console.log(locker("1203")); // Attempt 3
console.log(locker("1204"));  // -> 3 wrong attempts! locker is now locked.
console.log(locker("1204"));  // -> 3 wrong attempts! locker is now locked.
console.log(locker("1204"));  // -> 3 wrong attempts! locker is now locked.

