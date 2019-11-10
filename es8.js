"Turtle".padStart(10);
"Turtle".padEnd(10);

const fun = (a, b, c, d) => {
  console.log(a);
};

let obj = {
  username0: "Santa",
  username1: "Rudolf",
  username2: "Mr Grinch"
};

Object.keys(obj).forEach((key, index) => {
  console.log(key, obj[key]);
});

Object.values(obj).forEach(value => {
  console.log(value);
});

Object.entries(obj).forEach(value => {
  console.log(value);
});

const newObj = Object.entries(obj).map(value => {
  return value[1] + value[0].replace("username", "");
});

let obj39 = {
  my: "name",
  is: "Rudolf",
  the: "raindeer"
};
// to this:
("my name is Rudolf the raindeer");
const newObj2 = Object.entries(obj39)
  .map(value => value.join(" "))
  .join(" ");
