//Write a JS programme to display the current day and time in the following format
//Today is: Thesday
//Current Time IS: 10PM : 30 : 38

const today = new Date();

let Hour = today.getHours();
let Minutes = today.getMinutes();
let Second = today.getSeconds();
const Format = today.getDay();


let Days = {
  1: "Sunday",
  2: "Monday",
  3: "Tuesday",
  4: "Thusday",
  5: "Friday",
  6: "Saturday",
  7: "Sunday",
};

const dayNumber = today.getDay();
const dayName = Days[dayNumber];

console.log(`Today is : ${dayName}`);
console.log(`Current Time Is : ${Hour} : ${Minutes} : ${Second}`)

