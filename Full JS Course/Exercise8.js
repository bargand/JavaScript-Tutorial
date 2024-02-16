//write a JS programme to calculate the day left before christmas 

let d = new Date()

let Christmas = new Date(d.getFullYear() , 11 , 25)

let DateToChrist = Math.floor((Christmas - d) / 1000 / 60 / 60 / 24 )
console.log(`${DateToChrist} Days Left To Christmas`)


























/*
// Get today's date
const today = new Date();

// Set Christmas date 
const christmas = new Date(today.getFullYear(), 11, 25); 

// Use Date object to calculate time difference between two dates
// and convert result to days
const daysToChristmas = Math.floor((christmas - today) / 1000 / 60 / 60 / 24);

// Print out number of days
console.log(`Days until Christmas: ${daysToChristmas}`);
*/