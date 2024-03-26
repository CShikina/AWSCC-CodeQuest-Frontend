// 1. Use a `for` loop to count from 1 to 5 and print each number to the console.
for (let i=1; i<=5; i++) {
    console.log(i);
}

// 2. Create an array named `cookies` with different types of cookies (strings).
let cookies = ["chocolate", "furtune", "oatmeal", "vanilla"];

// 3. Use a `for` loop to iterate over the `cookies` array and print each type of cookie to the console.
for (let i=0; i<cookies.length; i++){
    console.log(cookies[i]);
}

// 4.  Create a variable named `jarNotEmpty` and set it to `true`.
let jarNotEmpty = true;

// 5.  Use a `while` loop to simulate eating cookies while the jar is not empty.
let i=0;
while(jarNotEmpty){
    if (i<cookies.length) {
        console.log("Eating a " + cookies[i] + " cookie.");
    } else {
        console.log("Jar is empty.");
        jarNotEmpty = false;
    }
    i++;
}