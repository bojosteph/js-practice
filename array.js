var list = ["tiger", "cat", "bear", "bird"];
var numbers = [1, 2, 3, 4];
var booleans = [true, false, true];
var functionList = [
  function apple() {
    console.log("apple");
  }
];

console.log(functionList[0]);

list.shift();
list.pop();
list.push("elephant");
list.unshift("dolphin");
var newArr = [1, 2];
var addArr = list.concat(newArr);
console.log(addArr);
list.sort();
console.log(list);

var array = ["Banana", "Apples", "Oranges", "Blueberries"];

array.shift();
array.sort();
array.push("Kiwi");
array.shift();
console.log(array);
console.log(array.reverse());
numbers.sort((a, b) => b - a);
console.log(numbers);
var array2 = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];

console.log(array2[1][1][0]);
