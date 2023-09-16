//the rule of JS function: Before taking a breeth please call function at last or call to return a function in middle

//Call a function which performs a calculation and returns the result:
console.log(
  "Call a function which performs a calculation and returns the result:"
);

function myFunction(a, b) {
  return a * b;
}
let result = myFunction(2, 4);
console.log(result);

//Function Return:
// When JavaScript reaches a return statement, the function will stop executing.

// If the function was invoked from a statement, JavaScript will "return" to execute the code after the invoking statement.

// Functions often compute a return value. The return value is "returned" back to the "caller":
//Call a function which performs a calculation and returns the result:
console.log("another way to call a function");
let x = myFunction2(4, 2);
function myFunction2(a, b) {
  return a / b;
}
console.log(x);

//Why Functions?
// With functions you can reuse code

// You can write code that can be used many times.

// You can use the same code with different arguments, to produce different results.
console.log(
  "You can use the same code with different arguments, to produce different results."
);

let y = myFunction3(4, 2);
function myFunction3(a, b) {
  console.log(a / b);
  console.log(a * b);
  console.log(a + b);
}

//The () Operator
console.log("The () operator invokes (calls) the function:");

function addition(boys) {
  return (4 / 2) * (boys / 10);
}
let BoysValue = addition(200);
console.log(BoysValue);

//Accessing a function with incorrect parameters can return an incorrect answer:
function addition2(boys) {
  return (4 / 2) * (boys / 10);
}
let BoysValue2 = addition2(200);
console.log(BoysValue2);

//Functions Used as Variable Values
let text = "the temperature is " + toCelcious(100) + " celcious";
let text2 = `the temperature is ${toCelcious(100)} celcious`; //another way to print a console.log in JS
console.log(text);
console.log(text2);
function toCelcious(farenhite) {
  return (10 / 2) * (farenhite - 60);
}

//Local Variables
console.log("Local Variables");

function logg() {
  let carName = "Jaguar";
  let name = "the car name is " + carName;
  console.log(name);
}
logg();
