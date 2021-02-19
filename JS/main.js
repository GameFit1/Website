/*
// String, Numbers, Boolean, null, undefined

const name = "John";
const age = 30;

// Concatenation
console.log("My name is " + name + " and I am " + age);
// Template String
console.log(`My name is ${name} and I am ${age}`);



const s = 'technology, computers, it, code';

console.log(s.length);
console.log(s.toUpperCase());
console.log(s.toLowerCase());
console.log(s.substring(0,5).toUpperCase());
console.log(s.split(', '));



// Arrays - variables that hold multiple values

/*
const numbers = new Array('1,2,3,4,5');

console.log(numbers);


const fruits = ["apples", "oranges", "pears", 10, true];

fruits[5] = "grapes";

fruits.push("mangos");
fruits.unshift("strawberries");
fruits.pop();

console.log(Array.isArray(fruits));
console.log(fruits.indexOf("oranges"));
console.log(fruits);



const person = {
    fistName: "John",
    lastName: "Doe",
    age: 30,
    hobbies: ["music", "movies", "sports"],
    address: {
        street: "50 main st",
        city: "Boston",
        state: "MA"
    }
};

console.log(person);
console.log(person.fistName, person.lastName);
console.log(person.hobbies[0]);
console.log(person.address.city);

const { fistName, lastName, address: { city }} = person;

console.log(fistName);
console.log(city);

person.email = "john_doe@gmail.com";

console.log(person);




const todos = [
    {
        id: 1,
        text: "Take out trash",
        isComplete: true
    },
    {
        id: 2,
        text: "Meeting with boss",
        isComplete: true
    },
    {
        id: 3,
        text: "Dentist appt",
        isComplete: false
    },
];

console.log(todos);
console.log(todos[1].text);

const todoJSON = JSON.stringify(todos);
console.log(todoJSON);

// For
for(let i = 0; i < 10; i++) {
    console.log(i);
}

// While
let i = 0;
while(i < 10) {
    console.log(`While Loop Number: ${i}`);
    i++;
}


const todos = [
    {
        id: 1,
        text: "Take out trash",
        isComplete: true
    },
    {
        id: 2,
        text: "Meeting with boss",
        isComplete: true
    },
    {
        id: 3,
        text: "Dentist appt",
        isComplete: false
    },
];

for(let i = 0; i < todos.length; i++) {
    console.log(todos[i].text);
}

for(let todo of todos) {
    console.log(todo.text);
}



const todos = [
    {
        id: 1,
        text: "Take out trash",
        isComplete: true
    },
    {
        id: 2,
        text: "Meeting with boss",
        isComplete: true
    },
    {
        id: 3,
        text: "Dentist appt",
        isComplete: false
    },
];


// forEach, map, filter
todos.forEach(function(todo) {
    console.log(todo.text);
});

const todoText = todos.map(function(todo) {
    return todo.text;
});

console.log(todoText);

const todoComplete = todos.filter(function(todo) {
    return todo.isComplete === true;
});

console.log(todoComplete);

const todoComplete1 = todos.filter(function(todo) {
    return todo.isComplete === true;
}).map(function(todo) {
    return todo.text;
})

console.log(todoComplete1);


const x = 6;


if(x === 10) {
    console.log("x is 10");
} else if(x > 10) {
    console.log("x is grater than 10");
} else {
    console.log("x is less than 10");
}

const y = 15;

if(x > 5 || y > 10) {
    console.log("x is more than t OR y is more than 10");
}

if(x > 5 && y > 10) {
    console.log("x is more than t AND y is more than 10");
}


const x = 6;

const color = x > 10 ? "red" : "blue";

console.log(x, color);

switch(color) {
    case "red":
        console.log("color is red");
        break;
    case "blue":
        console.log("color is blue");
        break;
    default:
        console.log("color is not red or blue");
}



function addNums(num1 = 1, num2 = 1) {
    return num1 + num2;
}

console.log(addNums(5, 5));


const addNums = (num1 = 1, num2 = 1) => {
    return num1 + num2;
}

const addNums = (num1 = 1, num2 = 1) => return num1 + num2;

const addNums = (num1 = 1, num2 = 1) => num1 + num2;

console.log(addNums(5, 5));



// Constructor function
function Person(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
    this.getBirthYear = function() {
        return this.dob.getFullYear();
    }
    this.getFullName = function() {
        return `${this.firstName} ${this.lastName}`;
    }
}

Person.prototype.getBirthYear = function() {
    return this.dob.getFullYear();
}

Person.prototype.getFullName = function() {
    return `${this.firstName} ${this.lastName}`;
}

// Class
class Person {
    constructor(firstName, lastName, dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);

    }
    getBirthYear() {
        return this.dob.getFullYear();
    }
    getBirthYear() {
        return `${this.firstName} ${this.lastName}`;
    }
}

// Instantiate object
const person1 = new Person("John", "Doe", "4-3-1980");
const person2 = new Person("Mary", "Doe", "4-3-1970");
const person3 = new Person("Boston", "Doe", "4-3-1990");

console.log(person1, person2, person3);
console.log(person1.getBirthYear());
console.log(person1.getFullName());



// Single element
console.log(document.getElementById("my-form"));
console.log(document.querySelector("h1"));

// Multiple element
console.log(document.querySelectorAll(".item"))


const ul = document.querySelector(".items");

//ul.remove();
//ul.lastElementChild.remove();
ul.firstElementChild.textContent = "Hello";
ul.children[1].innerText = "Brad";
ul.lastElementChild.innerHTML = "<h1>Hello<h1>";

const btn = document.querySelector(".btn");
btn.style.background = "red";



const btn = document.querySelector(".btn");
btn.addEventListener("mouseout", (e) => {
    e.preventDefault();
    document.querySelector("#my-form").style.background = "#ccc";
    document.querySelector("body").classList.add("bg-dark");
    document.querySelector(".items").lastElementChild.innerHTML = "<h1>Hello<h1>";
});

*/


const myForm = document.querySelector("#my-form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const msg = document.querySelector(".msg");
const userList = document.querySelector("#users");

myForm.addEventListener("submit", onSubmit);

function onSubmit(e) {
    e.preventDefault();
    let users = [""];
    if(nameInput.value === "" || emailInput.value === "") {
        msg.innerHTML = "Please enter all fields";

        setTimeout(() => msg.innerHTML = "", 3000);
    } else {
        users.push(nameInput.value);
        userList.innerHTML = users;
    }
}