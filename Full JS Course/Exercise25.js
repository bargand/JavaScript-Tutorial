/*
//Write a JavaScript program to check whether a given positive number is a multiple of 3 or 7.

let userInput = parseInt(prompt("Enter your number"))

// console.log(userInput)

if (userInput%3 === 0 || userInput%7 === 0){
    console.log("yes this number is a multiple of 3 or 7")
}
else{
    console.log("no! it is not a multiple of 3 or 7")
}
*/

//modify the code with function

let num = (e) =>{
    if (e% 3 === 0 || e% 7 === 0){
        return true
    }
    else{
        return false
    }
}
console.log(num(10))
console.log(num(30))
console.log(num(15))
console.log(num(70))