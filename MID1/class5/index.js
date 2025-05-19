// (function fun1(){
//     console.log("I m invoked function");
// })();
//fun1();
function fun2() {
    console.log("I m invoked function 2");
    return "Hello";
}
let greet = function fun2(value) {
    return `Hello ${value}`;
};

console.log(greet("John"));

let findDuplicates = function findDuplicates(arr) {
    let duplicates = [];
    arr.forEach((element, index) => { //do this by using arrow function
        if (arr.indexOf(element) !== index && !duplicates.includes(element)) {
            duplicates.push(element);
        }
    });
    return duplicates;
}

console.log(findDuplicates([1, 5, 3, 4, 5, 2, 5, 3, 4, 5]));

let nameless = (name) => {
    console.log(`Hello ${name}`);
}
let nameless2 = (name) => `Hello ${name}`;

nameless("Nehal");

//High Order Function:Function as a paramenter passed to the function 
let multiply = (a, b) => a * b; //with arrow function
let add = (a, b) => a + b;
let calculator = (a, b, operation) => operation(a, b);
console.log(calculator(2, 3, multiply)); //if we are passing function in function than it can be a callback function
console.log(calculator(2, 3, add));

let calculator1 = (a, b, operation) => operation(a, b), 
    multiply1 = (a, b) => a * b, 
    add1 = (a, b) => a + b;
    console.log(calculator1(2, 3, multiply)); //if we are passing function in function than it can be a callback function
    console.log(calculator1(2, 3, add));

function counter() {
    let count = 0;
    return function () {
        return count++;
    };

};
console.log(counter()); 
let increment=counter();

console.log(increment());
console.log(increment());
console.log(increment());
console.log(increment());
console.log(increment());
console.log(increment());

// Closures: When a function access variables from its outer scope, those variables are stored in memory as closure.
function findDuplicatesByClosure(arr) {
    let duplicates = [];
    return function findDuplicates() {
        arr.forEach((element, index) => {
            if (arr.indexOf(element)!== index &&!duplicates.includes(element)) {
                duplicates.push(element);
            }
        });
        return duplicates;
    }
}

let findDuplicatesByClosureFunc = findDuplicatesByClosure([1, 5, 3, 4, 5, 2, 5, 3, 4, 5]);
console.log(findDuplicatesByClosureFunc());
let values1=[1,2,3,4,5];
// function multiply1(...values){ //rest operator ... for single values and Spread ... for array values
//     return values.reduce((result, value) => result * value, 1);
// }
// console.log(multiply1(1, 2, 3, 4, 5));
// console.log(multiply1(values1));

// Promises: A Promise is a JavaScript object that represents an operation that hasn't completed yet, but is expected to complete at some point.
//synchronous function 
//asynchronous function  async with functions and await where the task is executed asynchronously and the rest of the code is executed in parallel
setTimeout(()=>{
    console.log("Hello");
}, 2000);