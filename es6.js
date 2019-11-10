const player1 = "bobby";
let exp1 = 100;
let wizardLevel1 = false;

if (exp1 > 90) {
  let wizardLevel1 = true;
  console.log("inside", wizardLevel1);
}

console.log("outside", wizardLevel1);
exp1 = 90;

const obj = {
  player: "bobby",
  exp: 100,
  wizardLevel: false
};

obj.wizardLevel = true;

// destructure
// const player = obj.player;
// const exp = obj.exp;
// const wizardLevel = obj.wizardLevel;

const { player, exp, wizardLevel } = obj;

console.log(player);
const name = "John Snow";
const obj2 = {
  [name]: "hello",
  ["ray" + "smith"]: "hihi"
};

const a = "Simon";
const b = true;
const c = {};

const obj3 = {
  a,
  b,
  c
};

// template strings
const name1 = "Sally";
const age = 33;
const greeting = `hello ${name1} youre age is ${age - 10}`;

// default arguments

function greet(name = "", age = 30, pet = "cat") {
  return `hello ${name} youre age is ${age - 10} . I like your ${pet}`;
}

//symbol
let sym1 = Symbol();
let sym2 = Symbol("foo");
let sym3 = Symbol("foo");

//arrow

const add = (a, b) => a + b;

let a3 = "test";
let b3 = true;
const c3 = 789;
a3 = "test2";

// Destructuring
var person = {
  firstName: "John",
  lastName: "Doe",
  age3: 50,
  eyeColor: "blue"
};

// var firstName = person.firstName;
// var lastName = person.lastName;
// var age = person.age;
// var eyeColor = person.eyeColor;

const { firstName, lastName, age3, eyeColor } = person;
console.log(firstName);

let a4 = "test";
let b4 = true;
let c4 = 789;

var okObj = {
  a4,
  b4,
  c4
};
// Template strings
let city = "Rome";
var message =
  "Hello " +
  firstName +
  " have I met you before? I think we met in " +
  city +
  " last summer no???";
`Hello ${firstName} have I met you before ${city}`;
//default
function isValidAge(age = 10) {
  return age;
}
// Arrow functions
function whereAmI(username, location) {
  if (username && location) {
    return "I am not lost";
  } else {
    return "I am totally lost!";
  }
}

const whereAmI2 = (username, location) =>
  username && location ? "I am not lost" : "I am totally lost";

// Symbol
// Create a symbol: "This is my first Symbol"

const sym7 = Symbol("this is my first symbol");
