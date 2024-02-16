/*
//strings are used to state and manupulate text string can created using the following syntax

let string = "this is a string";
console.log(string);
let length = (string.length);
console.log(string[0]);

//this type os string is called template litteral
console.log(`the length of the string is ${length}`);

//convart in Uppercase
let Uppercase = string.toUpperCase();
console.log(Uppercase);

//convart in Lowercase  
let Lowercase = string.toLowerCase();
console.log(Lowercase);

//Capitalized string first word
function capitalizeWords(string) {
  return string.split(" ").map(word => {
    return word.charAt(0).toUpperCase() + word.slice(1); 
  }).join(" ");
}

let capitalized = capitalizeWords(string);
console.log(capitalized);
let string2 = "Bargand.com";

//slice method
console.log(string2.slice(1 ,5))

//replace metod
console.log(string2.replace("com" , "co"))

// concatination
console.log(string2.concat(" is a website"))

//charat method
console.log(string2.charAt(0))

//index method
console.log(string2.indexOf("g"))
*/