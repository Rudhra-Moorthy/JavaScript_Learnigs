// Generator function 

/* function* generatorFunction() {
    yield "First val";
    yield "second val";
    yield "Third val";
    return "Final val";
}
let generator = generatorFunction();
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value); */
/* console.log(generator.next().value); */

function* idGenerator() {
    let id = 1;
    while(true) {
        yield id++;
        if(id >= 10) return id = 10;
    }
}

const getId = idGenerator();
console.log(getId.next());
console.log(getId.next());
console.log(getId.next());
console.log(getId.next());
console.log(getId.next());
console.log(getId.next());
console.log(getId.next());
console.log(getId.next());
console.log(getId.next());
console.log(getId.next());


