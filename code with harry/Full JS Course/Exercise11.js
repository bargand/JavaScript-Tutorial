/*
// write a program to calculate factorial of a number using reduce and using for loop

const factorial = (n) => {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
};

console.log(factorial(6));
*/

const factorial = (n) => {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result += i;
  }
  return result;
};

console.log(factorial(9));
