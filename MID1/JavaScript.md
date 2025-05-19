# JavaScript: A Comprehensive Guide

## Introduction
JavaScript is a versatile programming language widely used for web development. It enables interactive web pages, dynamic content, and server-side applications.

## JavaScript Basics
### Variables and Data Types
JavaScript has three main ways to declare variables:
- `var` (function-scoped, outdated)
- `let` (block-scoped)
- `const` (block-scoped, immutable)

Data types in JavaScript:
- Primitive: `string`, `number`, `boolean`, `null`, `undefined`, `symbol`, `bigint`
- Non-primitive: `object`, `array`, `function`

### Operators
JavaScript supports arithmetic, comparison, logical, assignment, bitwise, and ternary operators.

## JavaScript Functions
### Function Declaration
```js
function greet(name) {
    return `Hello, ${name}`;
}
```

### Function Expression
```js
const greet = function(name) {
    return `Hello, ${name}`;
};
```

### Arrow Functions
```js
const greet = (name) => `Hello, ${name}`;
```

### Callback Functions
A callback function is passed as an argument and executed later.
```js
function fetchData(callback) {
    setTimeout(() => {
        callback("Data received");
    }, 2000);
}

fetchData((message) => console.log(message));
```

## Asynchronous JavaScript
### Promises
Promises represent a value that may be available now, in the future, or never.
```js
let myPromise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Promise resolved"), 2000);
});

myPromise.then((message) => console.log(message));
```

### async/await
A modern approach to handling asynchronous operations.
```js
async function fetchData() {
    let response = await new Promise((resolve) => setTimeout(() => resolve("Data received"), 2000));
    console.log(response);
}
fetchData();
```

## The Document Object Model (DOM)
### Selecting Elements
```js
document.getElementById("myId");
document.getElementsByClassName("myClass");
document.querySelector(".myClass");
document.querySelectorAll(".myClass");
```

### Modifying Elements
```js
let element = document.getElementById("myId");
element.innerHTML = "New Content";
element.style.color = "blue";
```

### Event Listeners
```js
document.getElementById("btn").addEventListener("click", function() {
    alert("Button clicked!");
});
```

## JavaScript Objects
### Object Creation
```js
let person = {
    name: "John",
    age: 30,
    greet: function() {
        console.log("Hello " + this.name);
    }
};
person.greet();
```

### JSON (JavaScript Object Notation)
```js
let jsonString = JSON.stringify(person);
let jsonObject = JSON.parse(jsonString);
```


## Conclusion
JavaScript is a powerful language used for both front-end and back-end development. Mastering its core concepts like DOM manipulation, asynchronous programming, and object-oriented principles is essential for building modern web applications.

