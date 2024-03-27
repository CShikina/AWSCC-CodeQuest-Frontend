
//Task 1: JavaScript to JSON
const product = {
    name: 'Sunscreen',
    price: 300,
    quantity: 2,
};
const productJSON = JSON.stringify(product);
console.log(productJSON);

//Task 2: JSON to JavaScript
const bookJSON = '{"title":"The Hunger Games", "author": "Suzanne Collins", "publishedYear": 2008}';
book = JSON.parse(bookJSON);
console.log(book.author)

//Task 3: Advanced JSON Operations
const person = [
    {name: 'John', age: 24, city: 'Manila'},
    {name: 'Dale', age: 20, city: 'Chicago'},
    {name: 'Angela', age: 23, city: 'New York'}
];

const personJSON = JSON.stringify(person);
const personArray = JSON.parse(personJSON);

personArray.forEach(person => {
    console.log(`Name: ${person.name}\tCity: ${person.city}`)
});