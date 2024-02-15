// Write a JavaScript program to check two given integers whether one is positive and another one is negative.

let number = parseInt(prompt("Enter a number"))

if (number < 0){
    console.log(`Your number is ${number} and this is Negetive`)
}
else if (number == 0){
    console.log(`your number is ${number} and is is neither positive nor negative`)
}
else{
    console.log(`Your number is ${number} and this is Positive`)
}