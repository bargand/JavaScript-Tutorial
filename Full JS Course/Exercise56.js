//Write a JavaScript program to test whether a string ends with "Script". The string length must be greater than or equal to 6.


let string = "JavaScript"
let length = string.length

if (length >= 6) {
    if (string.toLowerCase().endsWith("script")) {
        console.log('the string is ends with script')
    }
    else{
        console.log('the string is not ends with script')
    }
}
else if (typeof string !== "string") {
    console.log('this is not a string value')
}
else{
    console.log('the string length is less than 6')
}


/*
let string = "JavaScript";
let lowerstring = string.toLowerCase();
let length = string.length;

if (length >= 6) {
  if (lowerstring.endsWith("script")) {
    console.log("the string is ends with script");
  } else {
    console.log("the string is not ends with script");
  }
} else if (typeof string !== "string") {
  console.log("this is not a string value");
} else {
  console.log("the string length is less than 6");
}
*/