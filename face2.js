var database = [
  {
    username: "bojo",
    password: "1234"
  },
  {
    username: "sally",
    password: "123"
  },
  {
    username: "ingrid",
    password: "777"
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

function isUserValid(username, password) {
  for (var i = 0; i < database.length; i++) {
    if (
      database[i].username === username &&
      database[i].password === password
    ) {
      return true;
    }
  }
  return false;
}

function signIn(username, password) {
  if (isUserValid(username, password)) {
    console.log(newsFeed);
  } else {
    alert("Sorry, wrong username and password");
  }
}

signIn(userNamePrompt, passwordPrompt);
