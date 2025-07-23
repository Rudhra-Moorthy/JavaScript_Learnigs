let arr = [10, 20, 30, 40];

/* pop() ->  removes and return the last element in the array.*/
let removed = arr.pop();
console.log(`Array after popped last element(${removed}): ${arr}`); // -> arr = [10, 20, 30]

/* push(arg) -> Adds the element at the end of the array. */
arr.push(50);
console.log(`Array after pushed 50: ${arr}`); // -> arr = [10, 20, 30, 50]

/* shift() -> removes add returns the first element of the array. */
let shifted = arr.shift();
console.log(`Array after using shift() method which returns ${shifted}: ${arr}`); // -> arr = [20, 30, 50]

/* unshift(arg) -> Adds the element at the starting of the array. */
arr.unshift(100);
console.log(`Array after using unshift() method: ${arr}`); // -> arr = [100, 20, 30, 50]

/* splice(start, deleteCount, ...items) -> adds/ removes the elements in the array. 
start -> start index to delete elements from there.
deleteCount -> which defines no. of elements to delete after the starting index.
...items -> No. of elements to be added where the elements are removed.*/
/* arr.splice(1); //-> which removes all the elements atmost the given index. */
arr.splice(1, 2, ("String", true,1000), "Hello");
console.log(`Array after using splice() method: ${arr}`); // -> arr = [100,1000, "Hello", 50]