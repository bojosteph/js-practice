var database = [
  {
    username: "bojo",
    password: "1234"
  }
];

var newsFeed = [
  {
    username: "Bobby",
    timeline: "So tired"
  },
  {
    username: "Sally",
    timeline: "Javascript is sooo cool"
  }
];

var userNamePrompt = prompt("whats your username?");
var passwordPrompt = prompt("Whats your password?");

function signIn(username, password) {
  if (username === database[0].username && password === database[0].password) {
    console.log(newsFeed);
  } else {
    alert("Sorry, wrong username and password");
  }
}

signIn(userNamePrompt, passwordPrompt);

//function declaration
function newFunc() {}
// function expression
var newFunction = function() {};

//expression
1 + 3;
// newFunc(param1, param2);

//funct vs method
function thisisaFunc() {}

var obj = {
  thisIsMethod: function() {}
};

thisisaFunc();
obj.thisIsMethod();
