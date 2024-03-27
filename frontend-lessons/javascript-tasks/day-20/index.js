// JavaScript Fundamentals - Day 20: Assignment

//Task 1: Selecting Elements
const paragraphs = document.getElementsByTagName("p");
const infoElements = document.getElementsByClassName("info");
const headerElement = document.getElementById('header');
const highlightElement = document.querySelector('.highlight');

console.log(paragraphs);
console.log(infoElements);
console.log(headerElement);
console.log(highlightElement)

//Task 2: Modifying Elements
infoElements.textContent = "This paragraph is now updated!";
headerElement.style.backgroundColor = "pink";

// Task 3: Creating and Appending Elements
const subHeader = document.createElement("h3");
subHeader.innerText = "New Content";
document.body.appendChild(subHeader);
console.log(subHeader)

// Task 4: Removing Elements
highlightElement.remove();

// Task 5: Handling Events
headerElement.addEventListener("click", onClick);
function onClick(){
    alert("Header clicked!");
}

// Task 6: Advanced Element Manipulation
let color = ['lightgreen', 'lightblue'];
console.log(paragraphs.length);
for (let i=0; i<paragraphs.length; i++){
    paragraphs[i].style.backgroundColor = color[i];
}