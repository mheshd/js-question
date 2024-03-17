// 1 there is 100 of js basic level questin


 
// 2 What is JavaScript and what is its purpose?


// 3 How do you declare a variable in JavaScript?
let a = 1;

// 4 What are the different data types in JavaScript?
// primite string, number, boolean , undifiend
// complex data type = array, boject and function


// 5 How do you comment in JavaScript?
// single line//
// multi line/* */


// 6 What are the different types of operators in JavaScript?
// arithmetic assignment comprassion turnary logical and bitwis



// 7 How do you write conditional statements (if-else) in JavaScript?
if(Condition){

} else if(Condition1){

} else{

}






// 8 How do you write loops (for, while) in JavaScript?
for(let i = 0; i < 5; i++ ) {

}
while(conditon){

}



// 9 What is a function in JavaScript and how do you define one?
// in a function in js reusable block of code that perform a specific task
// you can define a function using a function key word

function myFunction(a,b){

}



// 10 How do you handle errors in JavaScript?
try{

}
catch(error){

}
finally{

}


// 11 How do you work with arrays and objects in JavaScript?
// i can create array using a sqaure notation and access it's element using index notion
let arr = [1,2,3,4,5]
arr[0]

// i can create a object using the curly braces and access it key value pair
let person = {
    name: "John",
    age: 30,
    city: "New York"
};
person.name


// 12 What is the difference between == and === in JavaScript?
// == equal value
// === equal type and equal value


// 13 How do you concatenate strings in JavaScript?
let str = "mahesh"
let str1 = "karki"
let str3 = str1.concat(str1)





// 14 What is the purpose of the typeof operator in JavaScript?
// type of operator is determine the data type of value and or variable


// 15 How do you convert a string to a number in JavaScript?
let num = "2"
parseInt(num)
console.log(typeof(num))



// 16 What is the difference between let, const, and var for declaring variables?
// var is a old and let ans const is new es6 feature after 2015
// var is a globle scope let and const si block scope
// let and var reassign the varaible value
// const can not be change and it can't be reassign and redeclare


// 17 How do you access elements in an array in JavaScript?
let arrs = [1,2,34,5]
arrs[1]




// 18 What is the difference between null and undefined in JavaScript?
// null is the intentional absence of any object value
// undefined is that is automatically assigned to the variable that have been declare but not intialized
let x = null; // assigning null
let y; // assingnig undefined



// 19 How do you create and manipulate objects in JavaScript?
// you can create a object in js object literal{} and new obj()constructor

let person11 = {
    name: "John",
    age: 30,
    city: "New York"
};
// Accessing object properties
let personName = person11.name; // Using dot notation
let personAge = person11["age"]; // Using bracket notation


// 20What are the different ways to declare and define a function in JavaScript?
// 1. Function declaration
function myFunction1(parameters){
// function body
}

//2. function expression 
let fnc = function(parameters){

}
//3. arrow funciton
let funcitonName = (a, b) => {}
// 4 Method definition in object literals: 
let obj1 = {methodName(parameters){

}}

// 21 How do you handle asynchronous operations in JavaScript?

// 22 How do you use console.log() for debugging in JavaScript?
// you can use console.log() to output message and variable to the console for debugging purpose
let k = "h"
console.log(k)

// 23 What are template literals and how do you use them in JavaScript?

// Template literals are a way  to expression inside string in js 
// using a backticks(``)
// You can also include multi-line strings and expressions directly within template literals using ${}`
let name1 = "John";
let greeting = `hello, ${name1}`



// 24 How do you use the Math object for mathematical operations in JavaScript?
// it can use it to perform like ronding , logarithms, trigonometry, etc

Math.round(3.3)
Math.sqrt(8)

// 25 What are JavaScript events and how do you handle them?
// onclick, onmouseover, onchage etc
// you can handle event with event listner

document.getElementById("demo").addEventListener("click", function(e){

})



// 26 What is the difference between synchronous and asynchronous code execution in JavaScript?
// synchronous code Synchronous code executes line by line and waits for each operation to complete before moving on to the next one

// asynchronous code allows multiple operations to be performed concurrently without waiting for each one to finish. Asynchronous operations typically involve callbacks, promises, or async/await syntax.






// 27 How do you work with dates and times in JavaScript?

//You can create a new Date object to represent the current date and time, or specific dates and times, and then use methods to retrieve or manipulate different components such as year, month, day, hour, minute, second, etc.
let date = new Date()
let year = date.getFullYear()


// 28 What are arrow functions and how do you use them in JavaScript?
let add = (a, b) => a + b;


// 29 How do you create and manipulate strings in JavaScript?
let str33 = "Hello, World!";
let substr = str.substring(0, 5); // Extract substring "Hello"

// 30 How do you use for...of loops in JavaScript?

let colors = ["red", "green", "blue"];
for (let color of colors) {
    console.log(color);
}
// 31 How do you use conditional (ternary) operators in JavaScript?

let age = 20;
let status = (age >= 18) ? "Adult" : "Minor";
 
// 32 What are JavaScript closures and how do they work?
// JavaScript closures are function that have access to outer(enclosing) function's variables, even after the outer function has finish execting.
//Closures occur when a function is defined with another function  and the inner funtion maintains  a reference to the variable of the outer funciton
// This allows the inner function to "remember" and access those variables.

function outerFunciton(){
    let outerVariable = "my name"
    function innerFunction(){
        console.log(outerFunciton)
    }
    return innerFunction
}

let innerFnc = outerFunciton()
innerFunc(); // Outputs: "I'm from outerFunction"

// 33 How do you use this keyword in JavaScript?
// The this keyword in JavaScript refers to the current execution context, which depends on how a function is called.
// In the global scope, this refers to the global object , in a function this refer the bject that the function is a method of when called using dot notation, or to the global object
//  Arrow functions do not have their own this context; instead, they inherit this from the enclosing lexical context. For example:

let obj = {
    name: "John",
    greet: function() {
        console.log("Hello, " + this.name);
    }
};
obj.greet(); // Outputs: "Hello, John"



// 34 How do you work with JSON data in JavaScript?



// 35 What are higher-order functions in JavaScript?
//Higher-order functions are functions that operate on other functions by taking them as arguments or returning them. They enable functional programming paradigms such as function composition, currying, and callbacks
function add(a, b){
    return a + b
}
function higherOrderFunction(func, x, y){
    return func(x, y)
}
let result = higherOrderFunction(add, 5, 3)
console.log(result)
// 36 How do you create and use arrays in JavaScript?
//  array literal notation ([]) or the Array constructor. 
let arr2 = [1,2,3] // array literal
let arr33 = new Array(1,2,3,4) // array constructor
console.log(arr2[0]); // Accessing the first element
arr33.push("grape"); // Adding an element to the end



// 37 What are the different methods to add elements to an array in JavaScript?
// array.push(), array.splice()
// array.unshift(), concat
// array.length()
let fruits = ["apple", "banana", "orange"];
fruits.push("lemon")
fruits.unshift("lichi")
fruits.splice(2, 0, "grafs")
let moreFruits = fruits.concat(["kiwi", "alls"])

// 38 How do you remove elements from an array in JavaScript?
// array.pop(),shift(),splice(),filter()
let fruitss = ["apple", "banana", "orange"];
fruitss.pop()
fruitss.shift()
fruitss.splice(1, 1)
let efruit = fruits.filter(fruitss => fruitss !== "bananan")


// 39 How do you iterate through an array in JavaScript?
// you can iterate through the array in various method
// for loop, for of, map, forEach()
let arr44 = [1,2,34,5]
for(let i=0; i < arr44.length; i++){
console.log(arr44[i])
}
for(x of arr44){
console.log(arr44)
}
arr44.forEach(function(element){
    console.log(arr44)
})
let arr55 = arr44.map(function(ele){
return arr44.sort()
})
console.log(arr55)

for(let q of arr44){
    console.log(q)
}



// 40 What is the map() method in JavaScript and how do you use it?
// the map() method is create a new array by applying a fnc to each element of the orginal array
// It does not mutate the original array. 
let numbers = [1, 2, 3, 4, 5];
let squaredNumbers = numbers.map(function(e){
    return e * e;
})
console.log(squaredNumbers)


// 41 What is the filter() method in JavaScript and how do you use it?
// the filter method () is create new array with all element that pass the certain condition provided by callback fnc
// It does not mutate the original array. 
let numberss = [1, 2, 3, 4, 5];
let evenNumbers = numberss.filter(function(numm){
    return numm % 2 === 9;
})

console.log(evenNumbers)


// 42 What is the reduce() method in JavaScript and how do you use it?
// The reduce() method  execute  a reducer fnc on each element of the array resulting in a single output value
// it can be use find the sum, calculate average more
let numbe = [1, 2, 3, 4, 5];
let sum = numbe.reduce(function(accumulator, currentValue){
    return accumulator + currentValue
})
console.log(sum)

// 43 What is the forEach() method in JavaScript and how do you use it?
// The forEach() method in JavaScript executes a provided function once for each array element.
// It does not return a new array and does not mutate the original array. 
let c = ["apple", "banana", "orange"];
c.forEach(function(ex){
    console.log(ex)
})

// 44 How do you sort an array in JavaScript?
let myArray = [1,2,34,5,6]
myArray.sort()

// 45 How do you reverse an array in JavaScript?
let myArrays = [1,2,34,5,6]
myArrays.reverse()

// 46 How do you check if an array contains a certain element in JavaScript?
// using include method
let findarr = [1,2,33]
findarr.includes(33) // output true




// 47 How do you find the index of an element in an array in JavaScript?
let d = ["apple", "banana", "orange"];
console.log(d.indexOf("banana")) // output 1


// 48 How do you merge two arrays in JavaScript?
// concat() spread operator
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];

let mergeArr = [...array1, ...array2]


// 49 What is the difference between slice() and splice() methods in JavaScript?
// slice() method returns a shallow copy of a portion of an array into a new array without modifying the original array. It takes two optional parameters: start and end indices. 

let zz = ["apple", "banana", "orange", "grape"];
let selectedFruits = zz.slice(1, 3);
console.log(selectedFruits); // Output: ["banana", "orange"]


// splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements

// It takes three parameters: start index, delete count, and optional new elements.

let cc = ["apple", "banana", "orange", "grape"];
let removedFruits = cc.splice(1, 2, "kiwi", "melon");
console.log(cc); // Output: ["apple", "kiwi", "melon", "grape"]
console.log(removedFruits); // Output: ["banana", "orange"]

// 50 What is the spread syntax (...) in JavaScript and how do you use it?
// spread syntax (...)  is used to expand an iterable like an array or string into the individual elements
const array11 = [1, 2, 3];
const array22 = [4, 5, 6];
let array33 = [...array11, ...array22]

// Example with strings
const string = 'hello';
let characters = [... string]
console.log(characters); // Output: ['h', 'e', 'l', 'l', 'o']

// 51 How do you clone an array in JavaScript?
// spread syntax (...) or the Array.from() method
let originalArray = [1,2,3]
let colonArray = [...originalArray]

// // Using Array.from()
let anotherArray = Array.from(originalArray)

// 52 How do you create and use objects in JavaScript?
let e = {
    name1: "mahesh"
}
// adding a property
e.age = 22

// Updating existing properties
e.name1 = "arun"

console.log(e.name1)


// 53 What are object properties and how do you access them in JavaScript?
// you can access the object properties dot natation and  bracket notation
const person111 = {
    name: 'John',
    age: 30,
    city: 'New York'
  };
  console.log(person111.name)
  console.log(person111[age])
 


// 54 How do you add or update object properties in JavaScript?
let obj22 = {
    name1: "mahes"
}
obj22.age = 22;
// update
obj22.name1 = "arnun"


// 55 What are object methods and how do you define them in JavaScript?
// object method are fnc store as object property
const man = {
    name1: "mahesh",
    greet: function(){
        console.log(`hello my name is ${name1}`)
    }
}
man.greet()

// 56 How do you iterate through object properties in JavaScript?
// using for in loop
for(let key in obj){
console.log(`${key}: ${obj[key]}`)
}

// 57 How do you check if an object has a certain property in JavaScript?
// you can check if an object has certain property using  own property mehtod
let myObj = {
    name1: "mahes",
    name3: "aakas"
}
let f = myObj.hasOwnproperty('name1')


// 58 How do you clone an object in JavaScript?
// you can clone a object using object.asign and spread operer
const clonObj = [...obj]

// 59 What are destructuring assignments in JavaScript and how do you use them?
// Destructuring assignment is a way to extract value from object or array into varaible


// give a detail answer


// 60 What are default parameters in JavaScript functions?
// default parameter allow you to assign a default value of function parameter
function ab(x = 0, y = 'guest'){
    console.log(`hello ${y}`)
}
ab()

// 61 What is the arguments object in JavaScript?
// The arguments object is an array-like object available inside fnc
function summ(){
    let sum = 0;
    for(let i=0; i < arguments.length; i++){
        sum += arguments[i]
    }
    return sum;
}

console.log(summ(1,2,3))

// 62 What are rest parameters in JavaScript functions?
// rest parameter allow you to represent an idefinite number of argument as an array
function restpraa(...aa){
    return aa.reduce((acc, num) => acc + num)
}
console.log(restpraa(1,2,2,2))

// 63 What are getters and setters in JavaScript objects?
// getter ans setter are the special method of object to define custom behaiver when getting ans settting value of property
let objj = {
    _name: "mahesh",
    get name(){
        return this_name.toUpperCase()
    },
    set name(newNmae){
        return this_name = newNmae;
    }
}
console.log(objj.name) // uotput mahesh

objj.name = 'susma'
console.log(objj.name) // output susma

// 64 What is the difference between for...in and for...of loops in JavaScript?
// for in .. iterate over enumerable property of object
// // for...of iterates over iterable objects like arrays, strings, etc.

const arrv = [1, 2, 3];

for(let key in arrv){
    console.log(key) // output 012
}
for(let value of arrv){
    console.log(value) // output 123
}
// 65 What are JavaScript promises and how do you use them?
// promise are object representing the evenual completion or failer of an asynchronous operation.
const promise = new Promise((resolve, reject) => {
   setTimeout(() => {
     resolve('Data fetched successfully')
   }, 2000);
})
promise.then(
    data => console.log(data)
)

// 66 What is asynchronous programming in JavaScript?
// Asynchronous programming allows multiple operations to execute concurrently without blocking the main thread.
async function fetchData(){
    const response = await fetch('https://api.example.com/data');
    const data = await response.json()
    return data()
}
fetchData.then(data => console.log(data))

// 67 What is the async keyword in JavaScript and how do you use it?
// async keyword is used to define asynchronous functions.


// 68 What is the await keyword in JavaScript and how do you use it?
// await keyword is used inside async functions to pause execution until a promise is settled.


// 69 How do you handle errors in asynchronous JavaScript code?
// Errors in asynchronous JavaScript code can be handled using try...catch block or by attaching a.cactch() method to promise
async function fetchDatas() {
    try{
        const response = await fetch('https://api.example.com/data');
        const data = await response.json()
        return data
    } catch(error){
         console.error('Error fetching data:', error);
    }
}
fetchDatas()

// 70 What are JavaScript callbacks and how do you use them?
// a callback are a function passed as argument to other function to be executed later
function aab(callback){
    setTimeout(() => {
        console.log("i am call bakc")
    }, 2000);
}
aab(data => console.log(data))
// 71 What is the event loop in JavaScript?
// The event loop is the mechanism that allows JavaScript to perform non-blocking I/O operations, maintaining responsiveness by handling events and executing tasks in a loop.




// 72 What are JavaScript modules and how do you use them?
// modules are in js that reusable pieces of code that can exprot from one program and import into another
// Example: Exporting and importing modules
// File: math.js
export function ad(a,b){
return a + b
}
// File: main.js
import { ad} from './math.js';

console.log(add(2, 3)); // Output: 5

// 73 What is hoisting in JavaScript?
// Hoisting is a JavaScript mechanism where variables and fnc declarations are moved to the top of their containing scope during the combile phase
console.log(xl); // Output: undefined
var xl = 5;



// 74 What are JavaScript closures and why are they useful?
// Closures are functions that capture the lexical scope in which they are defined.


function outerFnc(){
     const outerVariable = 'I am from outer function';
     function innerFnc(){
        console.log(outerVariable)
     }
     return innerFnc
}
const closure = outerFnc()  // Output: I am from outer function

// 75 How do you use closure to create private variables and functions in JavaScript?
function createCounter() {
    // Private variable
    let count = 0;
  
    // Private function
    function increment() {
      count++;
      console.log('Count:', count);
    }
  
    // Return an object with a method that can access the private variable and function
    return {
      increment: function() {
        increment();
      }
    };
  }
  
  // Usage
  const counter = createCounter();
  counter.increment(); // Output: Count: 1
  counter.increment(); // Output: Count: 2
  


// 76 What is the difference between global scope and local scope in JavaScript?
// global scope refers  to variable or function that are accessible from anywhere with in your code.
//it declare outside of any fnc or block
// local scope refer to variable or fnc tha are only accessible with in specific fnc or block of code where they can declare



// 77 What is the difference between function scope and block scope in JavaScript?


// Function scope:
// Variables declared using var keyword inside a function are function scoped. and they are  accessible  only with in fnc
// varaible declare inside a fnc with VAR keyword it can't be access outside of fnc

// block scope
// Variables declared using let or const keywords inside a block are blcok scoped.
// variables declared  inside of block




// 78 How do you handle exceptions (try...catch) in JavaScript?
try{
    // Code that may throw an exception
    throw new Error("This is an example error.");
} catch(error){
    // Code to handle the exception
    console.log("an error accurred", error.message)
} finally{
    console.log("This code always runs.");
}

// 79 What is strict mode in JavaScript and how do you enable it?
// Strict mode is a special mode in JavaScript that allows you to write more secure and reliable code by enforcing stricter rules and preventing common pitfalls and errors.


// When enabled, strict mode helps catch coding mistakes and makes it easier to write cleaner and more maintainable code
// you can use a strict mode 

//'use strict';




// 80 What are the different types of errors in JavaScript?

// Syntax Errors: These errors occur when you have violated the syntax rules of JavaScript

// Reference Errors: Reference errors occur when you try to access a variable or function that is not defined or not accessible in the current scope.

// Type Errors: Type errors occur when you try to perform an operation on a value of the wrong type

// Range Errors: 
// Internal Errors:





// 81 What is the purpose of the window object in JavaScript?
//  It provides access to global variables and functions, browser functionalities like navigation and history, the Document Object Model (DOM) of the current webpage, and tools for setting timers and handling events. In short, it's the interface between JavaScript code and the browser environment, allowing for interaction and manipulation of web content.





// 82 How do you access browser objects and properties in JavaScript?
// You access browser objects and properties directly through the global window object.
let windowHeight = window.innerHeight;
console.log('window height', windowHeight)


// 83 What is the document object in JavaScript?
// The document object represents the HTML document loaded in the browser window



// 84 How do you manipulate HTML elements with JavaScript?
// You can manipulate HTML elements using methods and properties provided by the document object, such as getElementById, querySelector, innerHTML, textContent, and setAttribute.

let headingElement = document.getElementById('heading');
headingElement.textContent = "New Heading";

// 85 How do you add event listeners to HTML elements in JavaScript?
// You add event listeners to HTML elements using the addEventListener method,
let buttonElement = document.getElementById('button');
buttonElement.addEventListener('click', function() {
  console.log("Button clicked");
});


// 86 What is event delegation in JavaScript?
// // Event delegation allows you to attach a single event listner to parent element
// and handle event for it's child element dynamically.
document.getElementById("demo").addEventListener("click", function(event){
    if(event.target.tagName === "btn"){
        console.log("Button clicked");
    }
})




// 87 How do you prevent default behavior of events in JavaScript?
// you prevent the default behavior of event using preventDefault method on the event object within the event handler function.

document.getElementById('link').addEventListener('click', function(event) {
    event.preventDefault();
    console.log("Link clicked, but default behavior prevented");
  });


// 88 What is event propagation in JavaScript?
// Event propagation refers to the mechanism of how events propagate or travel
// through the DOM tree from the target element to the root element (capturing phase)
// and then back down to the target element (bubbling phase).




// 89 How do you stop event propagation in JavaScript?
// You stop event propagation using the stopPropagation method

document.getElementById('parent').addEventListener('click', function(event) {
    event.stopPropagation();
    console.log("Click event stopped propagating at parent element");
  });




// 90 What is the difference between bubbling and capturing in event propagation?
// Bubbling starts from the target element and bubbles up to the root element,
// while capturing starts from the root element and goes down to the target element.





// 91 What are event handlers in JavaScript?

// in the browser, such as clicking a button, pressing a key, or moving the mouse


// 92 How do you handle keyboard events in JavaScript?
document.getElementById("btn").addEventListener("keydown", function(event){
    console.log("Key pressed:", event.key);
})

// 93 How do you handle mouse events in JavaScript?
document.addEventListener('mousemove', function(event) {
    console.log("Mouse moved at coordinates:", event.clientX, ",", event.clientY);
  });



// 94 What are anonymous functions in JavaScript and how do you use them?

// Anonymous functions are functions without a name. They can be defined inline,
// typically used as arguments to other functions or in event listeners.

setTimeout(() => {
    console.log("Anonymous function executed after timeout");
}, 2000);




// 95 What is the purpose of the bind() method in JavaScript?
// The bind() method creates a new function with a specified context (this) and
// optionally pre-filled arguments, without invoking the original function.
function greet(name) {
    console.log("Hello,", name);
  }
  let greetWithJohn = greet.bind(null, 'John');
  greetWithJohn();





// 96 How do you use the call() and apply() methods in JavaScript?
// Both call() and apply() methods are used to invoke a function with a specified context (this)
// and optional arguments, but they differ in how they accept arguments.

function sayHello() {
    console.log("Hello,", this.name);
  }
  let perso = { name: 'Alice' };
  sayHello.call(perso);
  sayHello.apply(perso);

// 97 What is the purpose of the setTimeout() function in JavaScript?
// // The setTimeout() function is used to execute a function or evaluate an expression
// after a specified delay (in milliseconds).



// 98 How do you use timers in JavaScript?
// Timers are used to schedule the execution of code at a later time.
// setTimeout() and setInterval() are two functions used for timers.

let timerId = setInterval(() => {
    console.log("Timer running");
}, 1000);




// 99 What is the purpose of the setInterval() function in JavaScript?
// The setInterval() function is used to repeatedly execute a function or evaluate an expression
let intervalId = setInterval(function() {
    console.log("Function executed repeatedly at interval");
  }, 2000);


// 100 How do you use intervals in JavaScript?
// Intervals are created using setInterval() function, which repeatedly executes a function or evaluates an expression at specified intervals.


// 101 What are the different ways to include JavaScript code in HTML documents?
// - Inline: using the <script> tag directly within the HTML document.
// - External file: linking an external JavaScript file using the src attribute of the <script> tag.
// - Event attributes: attaching JavaScript code directly to HTML event attributes like onclick.
// - Using frameworks and libraries: integrating JavaScript code provided by frameworks or libraries.