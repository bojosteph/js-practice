const first = () => {
  const greet = "Hi";
  const second = () => {
    console.log(greet);
  };
  return second;
};

const newFunc = first();
newFunc();

//Closures

//currying
const multiply = a => b => a * b;
const multiplyBy2 = multiply(2);
console.log(multiplyBy2(4));

//compose

const compose = (f, g) => a => f(g(a));
const sum = num => num + 1;

compose(
  sum,
  sum
)(5);
//7
//Avoiding sideeffects and functional purity
