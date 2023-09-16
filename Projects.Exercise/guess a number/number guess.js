/*
// Function to generate random number
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
let a = randomNumber(1, 100) ;
console.log(a)
*/

/*
// Function to generate random number
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

console.log("Random Number between 1 and 100: ")

// Function call
console.log( randomNumber(1, 100) );
*/

//write a JS code to generate a random number and store it in a variable,
//then program takes an input from the user to tell them wheather they guess was correct, greater or lesser then the original number
//100-(number of guess) is the score of the user
//the program is expected to terminate once
//the number is guessed number should be between 1 to 100

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
let RandomNumber = randomNumber(1, 100);

let NumberOfGuesses = 1;

console.log("You can guess a number 100 times");

while (NumberOfGuesses <= 99) {
  let YourNumber = parseInt(prompt("enter your gussed number>"));
  if (YourNumber > RandomNumber) {
    console.log("please input less numaric number");
  } else if (YourNumber < RandomNumber) {
    console.log("please enter greater numaric number");
  } else {
    console.log("Yah! You Won The game");
    console.log(`${NumberOfGuesses} Gusses are took to finished the game`);
    console.log(`${100 - (100 - (99 - NumberOfGuesses)) + 1} % accuracy`);
    break;
  }
  console.log(`${99 - NumberOfGuesses} number of gusses left`);
  NumberOfGuesses = NumberOfGuesses + 1;
}