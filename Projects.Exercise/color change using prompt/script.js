/*
//question number 1
let name = prompt("enter your name:");
document.getElementById("YourName").innerHTML = `my name is: ${name}`;

let age = parseInt(prompt("enter your age:"));
if (age < 18) {
  document.getElementById("DriveOrNot").innerHTML = `can i drive the car: No`;
} else {
  document.getElementById("DriveOrNot").innerHTML = `can i drive the car: Yes`;
}
*/

/*
//question number 2
let name = prompt("enter your name:");
document.getElementById("YourName").innerHTML = `my name is: ${name}`;
confirm("are you sure that is your name?");

let age = parseInt(prompt("enter your age:"));
console.error(age <= 0);
confirm("are you sure?");
if (age < 18) {
  document.getElementById("DriveOrNot").innerHTML = `can i drive the car: No`;
} 
else {
  document.getElementById("DriveOrNot").innerHTML = `can i drive the car: Yes`;
}
*/

/*
//question 4
//its may not run in the live surver it can run in the direct browser
let number = parseInt(
  prompt(
    "enter a number greater than 4 if you redirect firefox localhost to agricultureataglance.com:"
  )
);
if (number > 4) {
  location.href = "https://agricultureataglance.com";
}
*/

//question 5
//this code may not run in live surver this can run in raplit
let color = prompt("enter your reliable color");
let color2 = color.toLowerCase();
if (color2 == "green") {
  document.getElementById("BodyColor").style.background = "green"
}
if (color2 == "red") {
  document.getElementById("BodyColor").style.background = "red"
}
if (color2 == "blue") {
  document.getElementById("BodyColor").style.background = "blue"
}
if (color2 == "orange") {
  document.getElementById("BodyColor").style.background = "orange"
}
if (color2 == "yellow") {
  document.getElementById("BodyColor").style.background = "yellow"
}
if (color2 == "violet") {
  document.getElementById("BodyColor").style.background = "violet"
}
