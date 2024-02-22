let a = parseInt(prompt("enter first number"));
let b = parseInt(prompt("enter second number"));

let sum = a + b;

//when we want to throw an error
if (isNaN(sum)) {
  throw SyntaxError("code main latter use nehi karneka bidu");
} else {
  console.log(sum);
}

let x = 3;
function errorhandling() {
  try {
    console.log(sum * x);
    return true;
  } catch (error) {
    console.log("error aya hai gate kholo...");
    return false;
  } finally {
    console.log("your code is exicuted succesfully");
  }
}
errorhandling();
