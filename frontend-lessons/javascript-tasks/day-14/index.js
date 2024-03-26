// JavaScript Fundamentals - Day 14: Assignment

// 1. Create a variable named `temperature` and assign it a value.
// 2. Use an `if` statement to check if the `temperature` is greater than 30. Print a message to the console accordingly.
// 3. Extend the previous example with an `else` statement to print a different message if the temperature is not greater than 30.
// 4. Create a variable named `time` and assign it a value representing the current hour (in 24-hour format).
// 5. Use `else if` statements to greet the user based on the time of day (morning, afternoon, evening).
// 6. Create a switch statement for the variable `day`. Print a message based on the day of the week.

let temperature = 45;

if (temperature > 30) {
    console.log('Temperature is greater than 30.');
} else {
    console.log('Temperature is less than 30.');
}

let time = 11;

if (time < 12) {
    console.log('Good morning, User!');
} else if (12 <= time && time <= 17) {
    console.log("Good afternoon, User!");
} else {
    console.log("Good evening, User!");
}

let day = "Friday";

switch (day){
    case "Monday":
        console.log("Today is Monday.");
        break;
    case "Tuesday":
        console.log("Today is Tuesday.");
        break;
    case "Wednesday":
        console.log("Today is Wednesday.");
        break;
    case "Thursday":
        console.log("Today is Thursday.");
        break;
    case "Friday":
        console.log("Today is Friday.");
        break;
    case "Saturday":
        console.log("Today is Saturday.");
        break;
    case "Sunday":
        console.log("Today is Sunday.");
        break;
}