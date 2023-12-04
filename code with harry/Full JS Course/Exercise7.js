//number gussing game between 1 to 10

//first we creat a random nubmer generator between 1 to 10
let RandomNumber = Math.floor(Math.random() * 10) + 1;
console.log(RandomNumber);

//you can guess the number 100 times

let NumberOfGuess = 1;

while (NumberOfGuess < 99) {
  let YourNumber = parseInt(prompt("Enter Your Number: "));

  if (YourNumber > RandomNumber) {
    alert("Your Number Is Big, Please Decrease The Value Of Number");
  } else if (YourNumber < RandomNumber) {
    alert("Your Number Is Small, Please Increase The Value Of Number");
  } else {
    alert("Your Gussed The Right Number");
    break;
  }
}
