let num1 = +prompt("enter num: ");
let num2 = +prompt("enter num: ");
console.log(num1 + num2);
// Why 6.35.toFixed(1) == 6.3? How to round 6.35 the right way?
Math.round(6.35 * 10) / 10; //// 64 / 10

/// Repeat until the input is a number
var readNum3 = () => {
  let num = prompt("enter num");
  if (num === null) {
    return null;
  } else if (isNaN(num) === true || num.trim() === "") {
    return readNum();
  } else {
    return +num;
  }
};

///A random number from min to max

var randomNumber4 = (min, max) => {
  return min + Math.random() * (max - min);
};

/////A random integer from min to max

var randomNumber4 = (min, max) => {
  min = min - 1;
  max = max + 1;
  return Math.floor(min + Math.random() * (max - min));
};
