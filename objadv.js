var obj1 = { value: 10 };
var obj2 = obj1;
var obj3 = { value: 10 };

const obj4 = {
  a: function() {
    return this;
  }
};

class Player {
  constructor(name, type) {
    console.log("player", this);
    this.name = name;
    this.type = type;
  }
  introduce() {
    console.log(`Hi I am ${this.name}, I'm a ${this.type}`);
  }
}

class Wizard extends Player {
  constructor(name, type) {
    super(name, type);
    console.log("wizard", this);
  }
  play() {
    console.log(`WEEEEEEE i'm a ${this.type}`);
  }
}

const player1 = new Player("bob", "hobit");
const wizard1 = new Wizard("merlin", "Healer");

var c = [1, 2, 3, 4, 5];
// var d = [].concat(c);
var d = [...c];
d.push(1223333333);
console.log(d);
console.log(c);

let obj27 = {
  a: "a",
  b: "b",
  c: {
    deep: "try and copy me"
  }
};
let clone = Object.assign({}, obj27);
let clone2 = {
  ...obj27
};
let superClone = JSON.parse(JSON.stringify(obj27));
obj27.c.deep = "hahaha";
