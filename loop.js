var todos = [
  "clean room",
  "brush teeth",
  "exercise",
  "study js",
  "eat healthy"
];
var todoImpt = [
  "clean room!",
  "brush teeth!",
  "exercise!",
  "study js!",
  "eat healthy!"
];
// var todosLength = todos.length;
// for (var i = 0; i < todosLength; i++) {
//   console.log(todos[i], i);
// }

// todos.forEach(function(todo, i) {
//   console.log(todo, i);
// });
function logTodos(todo, i) {
  console.log(todo, i);
}

todos.forEach(logTodos);
todoImpt.forEach(logTodos);
// var counterOne = 10;
// while (counterOne > 0) {
//   console.log(counterOne);
//   counterOne--;
// }
// var counterTwo = 10;
// do {
//   console.log(counterTwo);
//   counterTwo--;
// } while (counterTwo > 0);

console.log(todos);
