//Write a JavaScript program to check whether two numbers are in the range 40..60 or 70..100 inclusive.

/*
 */
let NumberRange = (x, y) => {
  if (
    (40 <= x && x <= 60 && 40 <= y && y <= 60) ||
    (70 <= x && x <= 100 && 70 <= y && y <= 100)
  ) {
    return true;
  } else {
    return false;
  }
};
console.log(NumberRange(44, 56));
console.log(NumberRange(70, 95));
console.log(NumberRange(50, 89));
