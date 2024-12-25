// Write a JavaScript program to display the current day and time in the following format.  
// Sample Output : Today is : Tuesday.
// Current time is : 10 PM : 30 : 38


let today = new Date()

let date = today.getDate()
let month = today.getMonth()
let year = today.getFullYear()

let hour = today.getHours()
let minute = today.getMinutes()
let second = today.getSeconds()

let day = today.getDay()
let dayArray =["sunday", "monday", "Tue", "Thu", "Fri", "Sat"]  

// console.log(`${date} / ${month} / ${year}`)
// console.log(`${hour}:${minute}:${second}`)

if (hour>=12) {
    console.log(`Current time is : ${hour-12} PM :${minute}:${second}`)    
}
else{
    console.log(`${hour} AM`)
}
console.log(`Today is : ${dayArray[day]}`)