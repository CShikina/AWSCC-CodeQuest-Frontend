// JavaScript Fundamentals - Day 16: Assignment

// 1. Create a function named `greet` that prints a greeting message to the console.
// 2. Call the `greet` function to display the greeting.
// 3. Modify the `greet` function to take a parameter `name` and greet the person by name.
// 4. Create a function named `addNumbers` that takes two parameters and returns their sum.
// 5. Call the `addNumbers` function with different values and print the results.
// 6. Create a function named `calculateAverage` that takes an array of numbers as a parameter and returns the average.
// 7. Use the `calculateAverage` function with an array of numbers and print the result.


//greet function
function greet(name){
    console.log(`Hello, ${name}!`);
}

//function to get the sum of two numbers
function addNumbers(a, b){
    return a+b;
}

//returns the average of the array
function calculateAverage(nums){
    let sum=0;
    for (let i=0; i<nums.length; i++){
        sum += nums[i];
    }
    return sum/nums.length;
}

//calling greet function
greet("Shikina");

//print result of addNumbers function
console.log(`Sum = ${addNumbers(5, 4)}`);

//print result of calculateAverage function
let nums = [2, 4, 6, 8, 15];
console.log(`Average = ${calculateAverage(nums)}`);




