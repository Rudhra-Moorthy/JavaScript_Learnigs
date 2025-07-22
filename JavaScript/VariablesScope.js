// Variables Scope

// 1. var keyword -> function scope (It is accessed anywhere within the function)

function varFunctionScope() {
    var name = "Rudhra";
    function innserfunction() {
        console.log(`Hi ${name}, you are inside inner function`);
    }
    innserfunction();
    console.log(`Hi ${name}, you are at outer function`);
}

varFunctionScope(); 

// 2. let & const keyword -> block scoped(It is accessed within the blocks({}))
{
    let a = 10;
    const b =20;
    console.log(a);
    console.log(b);
}

console.log(a); // -> undefined
console.log(b);// -> Undefined 

// Global Scope (var)

var varWord = "I am a var variable";
let letWord = "I am a let variable";
const constWord = "I am a const variable";

console.log(window.varWord);
console.log(window.letWord);
console.log(window.constWord);
