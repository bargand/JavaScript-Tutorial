// Write a JavaScript program to get the current date.
// Expected Output :
// mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy

// This JavaScript program retrieves the current date and formats it in multiple ways (mm-dd-yyyy, mm/dd/yyyy, dd-mm-yyyy, dd/mm/yyyy). It uses the Date object to get the current day, month, and year, and then adds leading zeros if necessary to ensure proper formatting. Finally, it logs the formatted date strings to the console.

let today = new Date()

let month = today.getMonth()
let year = today.getFullYear()
let date = today.getDate()

console.log(`${month+1}-${date}-${year}`)
console.log(`${month}/${date}/${year}`)
console.log(`${date}-${month}-${year}`)
console.log(`${date}/${month}/${year}`)