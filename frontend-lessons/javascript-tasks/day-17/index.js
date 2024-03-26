// Working with Arrays in JavaScript - Day 17: Assignment

// Task 1: Array Basics

// 1. Create an array named `cities` containing the names of five cities.
// 2. Access and print the third city in the `cities` array.
// 3. Modify the second city in the array to a different city of your choice.

// Task 2: Array Operations

// 4. Create an array named `fruits` with at least three different fruits.
// 5. Add a new fruit to the end of the `fruits` array using the `push()` method.
// 6. Remove the last fruit from the array using the `pop()` method.
// 7. Use a loop to iterate through the `fruits` array and print each fruit to the console.

// Task 3: Advanced Array Techniques

// 8. Create an array named `numbers` with five numeric values.
// 9. Use the `map()` method to create a new array where each number is multiplied by 2.
// 10. Use the `filter()` method to create a new array containing only the numbers greater than 5 from the original `numbers` array.

// Task 4: Array Manipulation

// 11. Create an array named `colors` with at least four different colors.
// 12. Add a new color to the beginning of the `colors` array using the `unshift()` method.
// 13. Remove the first color from the array using the `shift()` method.
// 14. Use the `slice()` method to create a new array containing the second and third colors from the original array.

// Task 5: Array Splicing

// 15. Create an array named `characters` with at least six characters (strings).
// 16. Use the `splice()` method to insert two new characters at index 2 of the `characters` array.
// 17. Use the `splice()` method to remove three characters starting from index 4 of the `characters` array.

// These tasks will help you strengthen your understanding of working with arrays in JavaScript. Arrays are powerful tools for managing and manipulating collections of data. Good luck! 🚀

//task 1
let cities = ['paris', 'cairo', 'venice', 'berlin', 'milan'];
console.log(cities);
console.log(`Third city is ${cities[2]}`);
cities.splice(1, 1, 'barcelona');
console.log(cities);

//task 2
let fruits = ['apple', 'orange', 'mango'];
fruits.push('strawberry');
fruits.pop();
for(let i=0; i<fruits.length; i++){
    console.log(fruits[i]);
}

//task 3
let numbers = [2, 4, 6, 8, 10];
let numbersDoubled = numbers.map(function(numbers){
    return numbers *2;
})
let greaterThan5 = numbers.filter(function(numbers){
    return numbers > 5;
})
console.log(numbers);
console.log(numbersDoubled);
console.log(greaterThan5);

//task 4
let colors = ['pink', 'red', 'yellow', 'green'];
colors.unshift('purple');
colors.shift();
let newGroup = colors.slice(1, 3);
console.log(colors);
console.log(newGroup);

//task 5
let characters = ['Pam', 'Jim', 'Michael', 'Dwight', 'Angela', 'Kevin']
console.log(characters);
characters.splice(2, 0, 'Kelly', 'Stanley');
console.log(characters);
characters.splice(4, 3);
console.log(characters);