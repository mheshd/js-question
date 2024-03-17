// this is a clousar queestion
// Basic Closure Understanding:
//Explain what a closure is in JavaScript and provide an example to demonstrate its usage.

function outerFunction(){
    let outerVAriable = "i am a outer variable"
    function innerFunction(){
        console.log(outerVAriable)
    }
    return innerFunction
}

const fnc = outerFunction()
fnc()

// Accessing Variables in Outer Scope:
// Write a function that creates a closure and accesses a variable defined in its outer scope. Call the function and observe the output.
function a(){
    let text = "abcd"
    function b(){
        console.log(text)
    }
    return b
}
let textclousare = a()
textclousare()


// Creating Private Variables:
// Create a counter function that returns another function. The returned function should increment the counter each time it is called, but the counter variable should be inaccessible from outside the function.
function createCounter() {
    let counter = 0; // Counter variable is encapsulated within the closure

    function incrementCounter() {
        counter++;
        console.log('Counter:', counter);
    }

    // Return the function that increments the counter
    return incrementCounter;
}

// Create a counter function
const counter = createCounter();

// Call the returned function multiple times to observe the counter incrementing
counter(); // Output: Counter: 1
counter(); // Output: Counter: 2
counter(); // Output: Counter: 3

// Using Closure in Event Handlers:
// Write a function that adds click event listeners to a set of buttons. Each click event listener should display the index of the button clicked. Use closures to maintain the index information within each event listener.
function addButtonListeners(buttons) {
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function() {
            // Using closure to maintain the index information within each event listener
            const index = i;
            console.log('Button clicked:', index);
        });
    }
}

// Example usage: Assume 'buttons' is an array containing button elements
const buttons = document.querySelectorAll('button');
addButtonListeners(buttons);

// Closure in Asynchronous Operations:
// Create a function that performs an asynchronous operation (such as fetching data from an API) and takes a callback function as an argument. Inside the callback function, log the result obtained from the asynchronous operation. Use closure to maintain access to variables defined in the outer scope.

// Multiple Closures:
// Write a function that returns an array of functions. Each returned function should log its index when called. Use closures to maintain the index information within each function.
function fetchData(callback) {
    // Simulating an asynchronous operation (fetching data from an API)
    setTimeout(() => {
        const data = { id: 1, name: 'John Doe' };
        // Invoke the callback function and pass the fetched data
        callback(data);
    }, 1000);
}

// Example usage: Define a callback function to handle the fetched data
function handleData(data) {
    // Log the result obtained from the asynchronous operation
    console.log('Data received:', data);
}

// Call the fetchData function and pass the handleData function as a callback
fetchData(handleData);





// this is lexial environment


// Understanding Lexical Scope:


// a. What is the lexical scope of a variable declared inside a function?
function outerFunction() {
    let outerVariable = 'I am from the outer function';

    function innerFunction() {
        console.log(outerVariable); // Accessing outerVariable from the outer scope
    }

    innerFunction(); // Call innerFunction to access outerVariable
}

outerFunction(); // Call outerFunction to execute the code

// The variable outerVariable is declared inside the outerFunction.
// The innerFunction is nested within the outerFunction.
// The innerFunction has access to outerVariable because it is declared in the outer scope (lexical scope) of innerFunction.
// However, variables declared inside innerFunction are not accessible outside innerFunction, as they are scoped to innerFunction's lexical scope.







// b. If a variable is declared inside a function, can it be accessed outside of that function?
// No, a variable declared inside a function cannot be accessed outside of that function. In JavaScript, variables declared using var, let, or const are scoped to the function in which they are declared. This means they are only accessible within the function's block or scope, and attempts to access them from outside the function will result in a reference error.
function myFunction() {
    let myVariable = 'I am inside the function';

    console.log(myVariable); // This will log: "I am inside the function"
}

myFunction(); // Call the function

console.log(myVariable); // This will throw a reference error: myVariable is not defined



// c. Explain how nested functions utilize lexical scope.
/// Nested functions in JavaScript utilize lexical scope by allowing inner functions to access variables and parameters defined in their outer function's scope. Lexical scope means that a function's inner scope has access to variables and parameters from its outer scope, even after the outer function has finished executing.
function outerFunction() {
    let outerVariable = 'I am from the outer function';

    function innerFunction() {
        console.log(outerVariable); // Accessing outerVariable from the outer scope
    }

    innerFunction(); // Call innerFunction to access outerVariable
}

outerFunction(); // Call outerFunction to execute the code



// Identifying Closure:

// a. Define what a closure is in JavaScript.

// In JavaScript, a closure is a combination of a function and the lexical environment within which that function was declared. This lexical environment consists of all the variables that were in scope at the time the closure was created. Closures allow functions to retain access to their enclosing scope's variables even after the outer function has finished executing.

// Here's a breakdown of what closures entail:

// Function: A closure is essentially a function.
// Lexical Environment: The closure captures and retains references to variables in its lexical scope, even if the outer function has already finished executing.
// Retaining Access: This allows the inner function (the closure) to access and manipulate the variables from its outer scope, even after the outer function has completed execution.



// b. Provide an example of a closure in JavaScript code.
// see closures


// c. How does a closure maintain access to variables from its outer scope?
// A closure maintains access to variables from its outer scope by capturing and retaining references to those variables even after the outer function has finished executing.
// Working with Closures:



// a. Why are closures useful in JavaScript programming?
// Closures are useful in JavaScript programming because they allow functions to retain access to variables from their lexical scope, even after the outer function has finished executing. This enables powerful patterns such as data encapsulation, private variables, and maintaining state in asynchronous operations.



// b. How can closures be used to create private variables and functions?
// see cloueser

// c. Provide an example of using closures to maintain state across multiple function calls.
// clouser
// Scope Chain:

// a. Explain the concept of the scope chain in JavaScript.
// The scope chain in JavaScript refers to the hierarchical structure of nested scopes, where each inner scope has access to variables and functions defined in its outer scopes. This allows inner scopes to access and manipulate variables from outer scopes, forming a chain of scope levels. This mechanism is crucial for determining variable visibility and access within functions and their nested scopes.

function outerFunction() {
    let outerVariable = 'I am from the outer function';

    function innerFunction() {
        console.log(outerVariable); // Accessing outerVariable from the outer scope
    }

    innerFunction(); // Call innerFunction to access outerVariable
}

outerFunction(); // Call outerFunction to execute the code


// b. How does JavaScript determine the value of a variable within nested functions?

// JavaScript determines the value of a variable within nested functions by following the scope chain. When a variable is referenced in a nested function, JavaScript first looks for that variable in the local scope of the nested function. If the variable is not found there, JavaScript continues to look for it in the outer scopes, following the chain of nested functions until it finds the variable or reaches the global scope. If the variable is not found at any level of the scope chain, JavaScript throws a reference error

function outerFunction() {
    let outerVariable = 'I am from the outer function';

    function innerFunction() {
        console.log(outerVariable); // Accessing outerVariable from the outer scope
    }

    innerFunction(); // Call innerFunction to access outerVariable
}

outerFunction(); // Call outerFunction to execute the code


// c. What happens if a variable is not found in the immediate function scope? How does JavaScript handle this situation?
// 
// If a variable is not found in the immediate function scope, JavaScript continues to search for it in the outer scopes according to the lexical scope chain. This process continues until either the variable is found or the global scope is reached.

// If the variable is not found at any level of the scope chain, JavaScript throws a ReferenceError, indicating that the variable is not defined. This error occurs because JavaScript cannot find the variable in any of the accessible scopes, including the global scope.

// It's important to define variables within the appropriate scope to ensure they can be accessed where needed, and to avoid ReferenceErrors by ensuring that variables are defined before they are used.


function outerFunction() {
    let outerVariable = 'I am from the outer function';

    function innerFunction() {
        console.log(outerVariable); // Accessing outerVariable from the outer scope
        console.log(innerVariable); // Trying to access innerVariable, which is not defined in innerFunction's scope
    }

    innerFunction(); // Call innerFunction to execute
}

outerFunction(); // Call outerFunction to execute the code


// Practical Application:

// Write a function that takes a parameter base and returns a function that adds base to any number passed as an argument to the returned function. This function should demonstrate the use of closures.

function createAdder(base) {
    // Inner function that takes a number as input and adds base to it
    function adder(number) {
        return base + number;
    }

    // Return the inner function, creating a closure
    return adder;
}

// Example usage:
const addFive = createAdder(5); // Create a function that adds 5 to any number
console.log(addFive(10)); // Output: 15 (5 + 10)
console.log(addFive(20)); // Output: 25 (5 + 20)

const addTen = createAdder(10); // Create a function that adds 10 to any number
console.log(addTen(15)); // Output: 25 (10 + 15)
console.log(addTen(30)); // Output: 40 (10 + 30)






// higher order fnc


// Write a higher-order function called mapArray that takes an array and a callback function as arguments. 
//
function mapArray(array, callback) {
    // Initialize an empty array to store the modified elements
    const mappedArray = [];

    // Iterate through each element of the input array
    for (let i = 0; i < array.length; i++) {
        // Apply the callback function to the current element and push the result to the mappedArray
        mappedArray.push(callback(array[i]));
    }

    // Return the new array with modified elements
    return mappedArray;
}

// Example usage:
const numbers = [1, 2, 3, 4, 5];

// Define a callback function to double each element
function double(num) {
    return num * 2;
}

// Call mapArray with the numbers array and the double callback function
const doubledNumbers = mapArray(numbers, double);
console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]


// Create a higher-order function called filterArray that takes an array and a predicate function as arguments. The function should filter out elements from the array that don't satisfy the condition specified by the predicate function and return a new array with the filtered elements.
function filterArray(array, predicate) {
    // Initialize an empty array to store the filtered elements
    const filteredArray = [];

    // Iterate through each element of the input array
    for (let i = 0; i < array.length; i++) {
        // Check if the current element satisfies the condition specified by the predicate function
        if (predicate(array[i])) {
            // If the condition is satisfied, push the element to the filteredArray
            filteredArray.push(array[i]);
        }
    }

    // Return the new array with filtered elements
    return filteredArray;
}

// Example usage:
const numbers1 = [1, 2, 3, 4, 5];

// Define a predicate function to filter even numbers
function isEven(num) {
    return num % 2 === 0;
}

// Call filterArray with the numbers array and the isEven predicate function
const evenNumbers = filterArray(numbers, isEven);
console.log(evenNumbers); // Output: [2, 4]



// Implement a higher-order function called reduceArray that takes an array, an initial value, and a reducer function as arguments. The function should apply the reducer function to each element of the array, accumulating the result, starting with the initial value, and return the final accumulated value.
function reduceArray(array, initialValue, reducer) {
    // Initialize an accumulator variable with the initial value
    let accumulator = initialValue;

    // Iterate through each element of the input array
    for (let i = 0; i < array.length; i++) {
        // Apply the reducer function to the current element and the accumulator
        accumulator = reducer(accumulator, array[i]);
    }

    // Return the final accumulated value
    return accumulator;
}

// Example usage:
const numbers2 = [1, 2, 3, 4, 5];

// Define a reducer function to sum the elements
function sumReducer(accumulator, currentValue) {
    return accumulator + currentValue;
}

// Call reduceArray with the numbers array, an initial value of 0, and the sumReducer function
const sum = reduceArray(numbers, 0, sumReducer);
console.log(sum); // Output: 15 (1 + 2 + 3 + 4 + 5)


// Write a higher-order function called forEachElement that takes an array and a callback function as arguments. The function should iterate over each element of the array and apply the callback function to each element without returning anything.
function forEachElement(array, callback) {
    // Iterate through each element of the input array
    for (let i = 0; i < array.length; i++) {
        // Apply the callback function to each element
        callback(array[i]);
    }
}

// Example usage:
const numbers3 = [1, 2, 3, 4, 5];

// Define a callback function to log each element
function logElement(element) {
    console.log(element);
}

// Call forEachElement with the numbers array and the logElement callback function
forEachElement(numbers3, logElement);

// Create a higher-order function called composeFunctions that takes two functions as arguments and returns a new function that represents the composition of the two functions. When the composed function is called with an argument, it should apply the second function to the result of applying the first function to the argument.

function composeFunctions(func1, func2) {
    // Return a new function that represents the composition of func1 and func2
    return function(arg) {
        // Apply func1 to the argument and then apply func2 to the result
        return func2(func1(arg));
    };
}

// Example usage:
// Define two functions
function addOne(num) {
    return num + 1;
}

function multiplyByTwo(num) {
    return num * 2;
}

// Create a composed function using composeFunctions
const composedFunction = composeFunctions(addOne, multiplyByTwo);

// Call the composed function with an argument
const result = composedFunction(3); // equivalent to multiplyByTwo(addOne(3))
console.log(result); // Output: 8 (3 + 1 = 4, 4 * 2 = 8)





// 59 What are destructuring assignments in JavaScript and how do you use them?


// Destructuring assignments in JavaScript provide a concise syntax for extracting values from arrays or properties from objects and assigning them to variables. It allows you to unpack values from arrays or objects into distinct variables, making code cleaner and more readable.

// Here's a basic example of destructuring assignment with arrays and objects:

// Destructuring Arrays:

const numbers4 = [1, 2, 3, 4, 5];

// Extracting values from the array into separate variables
const [first, second, ...rest] = numbers4;

console.log(first); // Output: 1
console.log(second); // Output: 2
console.log(rest); // Output: [3, 4, 5]


// Destructuring Objects:
const person = {
    name: 'John',
    age: 30,
    country: 'USA'
};

// Extracting properties from the object into separate variables
const { name1, age1, country } = person;

console.log(name1); // Output: 'John'
console.log(age1); // Output: 30
console.log(country); // Output: 'USA'

// nested destructruing 
const student = {
    name: 'Alice',
    age: 25,
    scores: {
        math: 90,
        science: 85
    }
};

// Extracting nested properties from the object
const { name, age, scores: { math, science } } = student;

console.log(name); // Output: 'Alice'
console.log(age); // Output: 25
console.log(math); // Output: 90
console.log(science); // Output: 85







// Write a function to check if a given number is even or odd.
// Write a function to find the factorial of a given number.
// Write a function to reverse a string.



// Write a function to check if a string is a palindrome.




// 1 Write a function to count the number of vowels in a string.
//2 Write a function to count the number of words in a sentence.
//3 Write a function to find the maximum element in an array.
//4 Write a function to find the minimum element in an array.

//5 Write a function to find the sum of all elements in an array.
//6 Write a function to remove duplicate elements from an array.






//7 Write a function to check if a given number is prime.
//8 Write a function to generate Fibonacci series up to a given number.
// check





//9 Write a function to sort an array in ascending order.
//10 Write a function to sort an array in descending order.
//11 Write a function to find the intersection of two arrays.

//12 Write a function to find the union of two arrays.
//13 Write a function to find the difference between two arrays.


//14 Write a function to find the median of elements in an array
// see



//15 Write a function to convert Celsius to Fahrenheit.
//16 Write a function to convert Fahrenheit to Celsius.
//17 Write a function to find the area of a circle.
//18 Write a function to find the circumference of a circle.
//19 Write a function to find the area of a rectangle.
//20 Write a function to find the perimeter of a rectangle.
//21 Write a function to check if a given year is a leap year.
//22 Write a function to generate a random number between a given range.






//24 Write a function to capitalize the first letter of each word in a sentence.

//25 Write a function to find the longest word in a sentence.







//27 Write a function to remove whitespace from a string.
//28 Write a function to find the index of a given element in an array.
//29 Write a function to remove a specific element from an array
//30 Write a function to flatten a nested array.


//31 Write a function to merge two sorted arrays into one sorted array.
//32 Write a function to convert a number to its Roman numeral equivalent.
//33 Write a function to find the factorial of a number using recursion.
//34 Write a function to check if a given string contains only digits.
//35 Write a function to find the sum of digits in a number. 
//36 Write a function to find the reverse of a number.

//38 Write a function to check if a given number is a perfect number.
//39 Write a function to check if a given string is a valid email address.
//40 Write a function to check if a given string is a valid URL.
//41 Write a function to calculate the power of a number.
//42 Write a function to convert a decimal number to binary.
function decimalToBinary(decimal) {
    return decimal.toString(2)
}

console.log(decimalToBinary(10))
//43 Write a function to convert a binary number to decimal.
function binaryToDecimal(binary){
    return parseInt(binary, 2)
}

console.log(binaryToDecimal("10101"))
