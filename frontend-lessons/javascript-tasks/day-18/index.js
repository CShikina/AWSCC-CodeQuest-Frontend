// Working with Objects in JavaScript - Day 18: Assignment

//Task 1
const book = {
    title: 'The Hunger Games',
    author: 'Suzanne Collins',
    year: 2008,
};
console.log(book.author);

//Task 2
const student = {
    name: 'Shikina',
    age: 19,
    grade: 1.00,
};
student.age = 20;
student.subjects = ['Math', 'Science', 'English'];
console.log(student.subjects);

//Task 3
const rectangle = {
    width: 50,
    height: 50,
    calculateArea: function (a, b){
        return a * b;
    },
};
const area = rectangle.calculateArea(rectangle.width, rectangle.height);
console.log(area);

//Task 4
const person = {
    name: 'Mark',
    age: 20,
    address: 'Manila',
};
delete person.address;

const employee = {
    name: 'Mark',
    position: 'Engineer',
}

const employeeDetails = {
    ...person,
    ...employee,
};
console.log(employeeDetails);