function isUserValid(bool) {
  return bool;
}

var answer = isUserValid(true) ? "You may enter" : "Access denied";

var automatedAnswer =
  "Your account # is " + (isUserValid(false) ? "1234" : "not availabale");

function moveCommand(direction) {
  var whatHappens;
  switch (direction) {
    case "forward":
      whatHappens = "you encounter a monster";
      break;
    case "back":
      whatHappens = "you arrived home";
      break;
    case "right":
      whatHappens = "you encounter a lama";
      break;
    case "left":
      whatHappens = "you encounter a bidi";
      break;
    default:
      whatHappens = " kapppy";
  }
  return whatHappens;
}
