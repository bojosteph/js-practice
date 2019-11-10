var user = {
  name: "John",
  age: 34,
  hobby: "Soccer",
  isMarried: false,
  spells: ["abracadabra", "shazam"],
  shout: function() {
    console.log("AHHHHHHH");
  }
};

var list = [
  {
    username: "andy",
    password: "secret"
  },
  {
    username: "jess",
    password: "123"
  }
];

console.log(list);

console.log(user.hobby);
//add

user.favoriteFood = "Spinach";
user.isMarried = true;

console.log(user.spells[1]);
console.log(list[1].password);
//Method of user
console.log(user.shout());

var emptyObj = {};
var nullObj = null;
emptyObj.name = "Bob";

console.log(nullObj);
console.log(emptyObj);

var myUser = {
  username: "bob",
  password: "1234"
};

var database = [myUser];
console.log(database[0].username);

var newsfeed = [
  {
    username: "Jerry",
    timeline: "today"
  },
  {
    username: "Tina",
    timeline: "last week"
  },
  {
    username: "Joe",
    timeline: "last month"
  }
];
console.log(newsfeed);
