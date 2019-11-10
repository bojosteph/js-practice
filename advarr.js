const array = [1, 2, 10, 16];
const double = [];
const newArray = array.forEach(num => {
  double.push(num * 2);
});
// map, filter, reduce

const mapArray = array.map(num => num * 2);

const filterArray = array.filter(num => num > 5);

//reduce
const reduceArray = array.reduce((accumulator, num) => {
  return accumulator + num;
}, 0);
console.log("reduce", reduceArray);

// Complete the below questions using this array:
const array23 = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"]
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"]
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"]
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"]
  }
];

//Create an array using forEach that has all the usernames with a "!" to each of the usernames
const userArray = [];
const newArray2 = array23.forEach(user => userArray.push(user.username + "!"));

//Create an array using map that has all the usernames with a "? to each of the usernames
const map2Array = array23.map(user => user.username + "?");
//Filter the array to only include users who are on team: red
const filter2Array = array23.filter(user => user.team === "red");

//Find out the total score of all users using reduce

const reduce2Array = array23.reduce((acc, user) => {
  return acc + user.score;
}, 0);

// (1), what is the value of i?
// (2), Make this map function pure:
const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray3 = arrayNum.map((num, i) => {
  return num * 2;
});

//BONUS: create a new list with all user information, but add "!" to the end of each items they own.

const answer = array23.map(user => {
  user.items = user.items.map(item => {
    return item + "!";
  });
  return user;
});
