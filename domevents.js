var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var list = document.getElementsByTagName("li");

function inputLength() {
  return input.value.length;
}

function addButton(text) {
  var button = document.createElement("button");
  button.appendChild(document.createTextNode(text));
}
function createListElement() {
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value));
  ul.appendChild(li);
  input.value = "";

  addButtonToList(li, "Done!", underlineParent);
  addButtonToList(li, "Delete!", removeParent);
}

// ul.onclick = function(event){
// 	var target = event.target;
// 	target.classList.toggle("done");
// }

function underlineParent(event) {
  event.target.parentNode.classList.toggle("done");
}

function removeParent(event) {
  event.target.parentNode.remove();
}

function addListAfterClick() {
  if (inputLength() > 0) {
    createListElement();
  }
}
function addListAfterKeypress(event) {
  // console.log(event.which);
  if (inputLength() > 0 && event.keyCode === 13) {
    createListElement();
  }
}

function addButtonToList(li, text, callback) {
  var button = document.createElement("button");
  button.appendChild(document.createTextNode(text));
  li.appendChild(button);
  button.onclick = callback;
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);
