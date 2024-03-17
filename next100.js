// Explain the difference between `==` and `===` operators in JavaScript.

// 3. How does hoisting work in JavaScript?

//  when a variable and fnc declarations moved to the top theri containing scope




// 4. What are the benefits of using `let` and `const` over `var` for variable declaration?
// such as block scope, prevention of variable redeclaration, immutability (for const), and early error detection through the Temporal Dead Zone. This encourages cleaner, safer, and more predictable code, promoting better coding practices and easier maintenance.




// 5. Describe the `this` keyword in JavaScript.



// 8. Describe the difference between function declarations and function expressions.
// using the function keyword followed by the function name and its parameters, if any
function myFunctions() {
    // function body
}

//  Function Expression: A function expression can be defined using various syntaxes, but typically involves assigning an anonymous function to a variable or a property.
const myFunction = function() {
    // function body
};


// 9. What is a callback function and how is it used in JavaScript?
// callback funciton is a function that passed as an arguments to another function

function mycall(){
    console.log("i am a call back")
}
function performTask(callback){
console.log("perform task")
callback()
}
performTask(mycall)



// 12. Describe the purpose of the `forEach()` method in JavaScript arrays.
//forEach() method in JavaScript arrays is to iterate over each element in the array and perform a specified action for each element


// 13. How do you create and manipulate arrays in JavaScript?
let array = [1,2,3]
console.log(array[0])

// 14. What is the difference between `null` and `undefined` in JavaScript?
// null represent the intential absense of  any object value
// the variable intentionally holds no value or is empty
let my = null;


// a variable without a value has undefined, 




// 15. How do you create and manipulate objects in JavaScript?
let myObj = {a: "mahesh", B: "karki"}
console.log(myObj.a)


// 16. Explain the concept of function scope versus block scope in JavaScript.
// function scope

// variable declared and accessible only with in function and it can not be access outside of the fnc

//block scope
// variable declared inside of the block using let ans const it can't access  outside of the block



// 17. What is the purpose of the `map()` method in JavaScript arrays?
// map method () is in js array is iterate over each element in array and apply specific specified function to each element
// it create new array and it does not change the orginal array

// The purpose of the map() method is to transform each element of an array in a simple, concise, and functional manner, without mutating the original array




// 18. How do you use the `filter()` method to filter elements in an array?

let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evenNumber = arr1.filter(function(number){
    return number % 2 === 0
})

console.log(evenNumber)

let greaterThanFive = arr1.filter(number => number > 5)
console.log(greaterThanFive)

// 19. Describe the purpose of the `reduce()` method in JavaScript arrays.
// the purpose of reduce method () in js array is used to combine all the element of array into a single value
// like a calculating sum , find minimul and maximum 
let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = arr2.reduce((total, value) => total + value)
console.log(sum)



// 22. How do you use the `querySelector()` method to select elements in the DOM?
const elementById = document.querySelector('#elementId');

// 23. Describe the purpose of the `addEventListener()` method in JavaScript.

//The addEventListener() method in JavaScript is use to make a web page interactive.
// it's lets listen for user action like clicking button and typing on keyword



// 26. Explain the purpose of the `split()` method in JavaScript.

// The purpose of split()  is break down the word into simpler piace 

// This makes it easier to work with individual parts of the text, such as finding certain words or counting them



// 27. Describe the `setTimeout()` and `setInterval()` functions in JavaScript.
// The setTimeout() function is used to execute piece of code or function after specified delay, measured and in milisecond

setTimeout(() => {
    console.log("this is delay")
}, 2000);

// The setInterval() function is used to repeatedly excute a piace of code or funciton at the specidied  interval and measured in millisecond




// 28. How do you use the `map()` method to transform elements in an array?
//  transform elements in an array, you provide a callback fnc as arguments to map method()
const arr3 = [1, 2, 3, 4, 5];

const doubleNumber = arr3.map(function(number){
    return number * 2 
})
console.log(doubleNumber)



// 29. What is the purpose of the `splice()` method in JavaScript arrays?
// the purpose of splice() method is adding or removing element from an array at specific index



// 31. How do you use the `find()` method to find elements in an array?
const arr4 = [1, 2, 3, 4, 5];

const foundNumber = arr4.find(function(number){
    return number > 4
})
console.log(foundNumber)



// 33. What is the purpose of the `sort()` method in JavaScript arrays?
// arrange the element of an array in either ascending or descending  order



// 34. How do you use the `every()` and `some()` methods in JavaScript arrays?
// every
// The every() method tests whether all elements in the array pass the test implemented by the provided callback function.
// It stops execution once an element fails the test.

const arr5 = [1, 2, 3, 4, 5];
let greatethan = arr5.every(function(number){
    return number > 0
})

console.log(greatethan)


// The some() method tests whether at least one element in array passes the test mplemented by the provided callback function.
// It returns true if at least one element passes the test, otherwise, it returns false
// It stops execution once an element passes the test

const arr6 = [-1, 2, 3, 4, 5];

let lessthan = arr6.some(function(number){
    return number < 0
})
console.log(lessthan)




// 38. What is the purpose of the `Promise` object in JavaScript?

// the promise object in js helps handle asynchronous operations by representing their eventual completion or failure
// it allow to chaining mnultiple asynchronous tasks together in a clean or readable way avoiding the callback hell problem
// with promise you can perform asynchronous tasks, chain them sequentially and handle error effectively using .then() and .catch() method


// 40. Describe the purpose of the `Object.keys()` and `Object.values()` methods in JavaScript.

//The purpose of Object.keys() is to extract the keys (property names) of an object and return them as an array.

const person = {
    name: 'John',
    age: 30,
    city: 'New York'
};
const keys = Object.keys(person)
console.log(keys); // Output: ['name', 'age', 'city']


// The purpose of Object.values() is to extract the values of an object's properties and return them as an array.
const values = Object.values(person);
console.log(values); // Output: ['John', 30, 'New York']






// 41. Explain the concept of destructuring assignment in JavaScript.
// Destructuring assignment in JavaScript allows you to extract value from array or properties
// there are two type of destructring 
// array distructring
// With array destructuring, you can extract values from arrays into variables using a syntax that resembles array literals

const num = [1,2,3]
const [a, b, c] = num; 
console.log(a)
console.log(b)
console.log(c)


//Object Destructuring:
//With object destructuring, you can extract properties object into variable using a syntax that resembles object literal

const person1 = { name: 'John', age: 30 };
const {name, age} = person1
console.log(name)
console.log(age)

// 42. How do you use the `findIndex()` method to find the index of an element in an array?

let arr7 = [1,2,3,4,6]
console.log(arr7.indexOf(1))


// 43. Describe the purpose of the `Array.from()` and `Array.of()` methods in JavaScript.
// The purpose of Array.from() is to create a new array from an array-like or iterable object.
// It allows you to convert objects that resemble arrays (e.g., strings, NodeList, Set) or iterable objects (e.g., Map, Set) into proper arrays


const str = 'hello';
const newArray = Array.from(str);
console.log(newArray); // Output: ['h', 'e', 'l', 'l', 'o']


// array of
// Use Array.of() use to create a new array with provided element
const newArray1 = Array.of(1,2,4)
console.log(newArray1)



// 44. What is the purpose of the `Symbol` data type in JavaScript?
// The Symbol data type in JavaScript is used to create unique identifiers.

//Uniqueness: Each Symbol is different from others, ensuring uniqueness.
// Avoiding Property Collisions: Symbols can be used as property keys to prevent naming conflicts.
// Private Properties and Methods: Symbols can be used to create private properties and methods in objects.

const id = Symbol('id')
const user = {
    name: "mahesh",
    [id]: 123
}
console.log(user[id])



// 49. How do you use the `some()` method to check if any elements in an array satisfy a condition?

let arr8 = [1,2,3,4,5]
let newsome = arr8.some(function(number){
    return number > 3
})
console.log(newsome)



// 50. Explain the concept of event loop in JavaScript.
// to handle asynchronous operations efficiently. It's a fundamental concept for understanding how JavaScript manages tasks, including asynchronous callbacks, promises, and other asynchronous operations.




// 52. How do you use the `reduceRight()` method in JavaScript arrays?
let arr9 = [1,2,4,5]
let substaction = arr9.reduceRight((total, value)=> total - value)
console.log(substaction)
 



// 56. How do you use the `parseInt()` and `parseFloat()` functions in JavaScript?
// The parseInt() function parses a string and returns an integer
// It takes two arguments: the string to parse 
const num2 = "10"
console.log(parseInt(num2))


// The parseFloat() function parses a string and returns a floating-point number.
// It takes a single argument: the string to parse.

const num3 = "10.4"
console.log(parseFloat(num3))




// 57. Describe the purpose of the `Array.isArray()` method in JavaScript.
// Array.isArray()  check  whether a given value is array  it return true or flase


// 58. Explain the concept of the spread operator (`...`) in JavaScript.

//The spread operator (...) in JavaScript is used to expand an iterable(like an array) into individaul element
//task like passing a mnultipal argument to fnc creating a copy of array or merging a array

// coping array
const originalArray = [1, 2, 3];
const copyArr = [...originalArray]
console.log(copyArr)

//concat array
const array1 = [1, 2];
const array2 = [3, 4];
const concating  = [...array1, ...array2]
console.log(concating)


// Passing Multiple Arguments to Functions
function sum1(a, b, c){
    return a+b+c
}
const sum2 = [1,2,3,4]
console.log(sum1(...sum2))


// Converting Iterables to Arrays

const str4 = 'hello';
const chars = [...str];
console.log(chars); // Output: ['h', 'e', 'l', 'l', 'o']





// 59. What is the purpose of the `includes()` method in JavaScript arrays?
// arrays is to check whether an array contains a specific element.



// 60. How do you use the `Object.entries()` method in JavaScript?
// use to return an array containing the key value pairs of object as array
const person22 = {
    name: 'John',
    age: 30,
    city: 'New York'
  };

  const entriess = Object.entries(person22)
  console.log(entriess)

// 61. Describe the purpose of the `ArrayBuffer` and `TypedArray` objects in JavaScript.
// when i see i wiil do




// 63. What is the purpose of the `Math` object in JavaScript?
// Mathematical Functions: The Math object includes various mathematical functions such as Math.sin(), Math.cos(), Math.sqrt(), Math.max(), Math.min(), and Math.pow()





// it's all hard question

// 69. Describe the purpose of the `Reflect` object in JavaScript.
// when i see i wiil do



// 70. Explain the concept of prototypal inheritance versus classical inheritance in JavaScript.


// 71. What is the purpose of the `Array.prototype.every()` method in JavaScript?


// 72. How do you use the `Proxy` object to intercept and customize operations on objects in JavaScript?
// when i see i wiil do


// 73. Describe the purpose of the `Object.getOwnPropertyDescriptor()` method in JavaScript.


// 74. Explain the concept of function memoization in JavaScript and how it can improve performance.


// 75. What is the purpose of the `Array.prototype.splice()` method in JavaScript arrays?


// 76. How do you use the `Array.prototype.reduceRight()` method to reduce elements in an array from right to left?


// 77. Describe the purpose of the `Set` object in JavaScript and how it differs from an array.


// 78. Explain the concept of tail call optimization in JavaScript.


// 79. What is the purpose of the `BigInt` data type in JavaScript and how do you use it?


// 80. How do you use the `Array.prototype.copyWithin()` method to copy elements within an array?


// 81. Describe the purpose of the `Object.prototype.hasOwnProperty()` method in JavaScript.


// 82. Explain the concept of currying in JavaScript and how it can be achieved using higher-order functions.



// 83. What is the purpose of the `Array.prototype.some()` method in JavaScript arrays?


// 84. How do you use the `Object.create()` method to create objects with a specified prototype in JavaScript?


// 85. Describe the purpose of the `String.prototype.trim()` method in JavaScript.


// 86. Explain the concept of closure in JavaScript and provide an example of its practical use.


// 87. What is the purpose of the `Array.prototype.fill()` method in JavaScript arrays?


// 88. How do you use the `Function.prototype.apply()` method to call a function with a specified `this` value and arguments?

// 89. Describe the purpose of the `Array.prototype.lastIndexOf()` method in JavaScript.


// 90. Explain the concept of event bubbling and event capturing in JavaScript and how they differ.


// 91. What is the purpose of the `Array.prototype.unshift()` method in JavaScript arrays?


// 92. How do you use the `Object.entries()` method to get an array of key-value pairs from an object in JavaScript?




// 93. Describe the purpose of the `Array.prototype.slice()` method in JavaScript arrays.


// 94. Explain the concept of asynchronous programming in JavaScript and how it can be achieved using callbacks, Promises, and async/await.


// 95. What is the purpose of the `Array.prototype.keys()` method in JavaScript arrays?


// 96. How do you use the `Object.setPrototypeOf()` method to set the prototype of an object in JavaScript?


// 97. Describe the purpose of the `String.prototype.split()` method in JavaScript.


// 98. Explain the concept of the module pattern in JavaScript and how it can be used to encapsulate code.


// 99. What is the purpose of the `Array.prototype.concat()` method in JavaScript arrays?


// 100. How do you use the `Object.getOwnPropertyNames()` method to get an array of all property names of an object in JavaScript?




