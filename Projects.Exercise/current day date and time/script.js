// Write a JavaScript program to display the current day and time in the following format.  
// Sample Output : Today is : Tuesday.
// Current time is : 10 PM : 30 : 38
let today = new Date()
let day = today.getDay()
let daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"]
console.log(`Today is: ${daylist[day]}`)

let date = today.getDate()
let month = today.getMonth()
let year = today.getFullYear()
let monnthlist = ["january","february","march","april","may","june","july","august","september","october","november","december"]
console.log(`the date is: ${date} ${monnthlist[month]} ${year}`)

let hour =today.getHours()
let minutes = today.getMinutes()
let secound = today.getSeconds()
console.log(`the time is: ${hour} H ${minutes} M ${secound} Sec..`)
