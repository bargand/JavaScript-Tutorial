/*
//Write a JavaScript program to check whether three given integer values are in the range 50..99 (inclusive). Return true if one or more of them are in the specified range. 

let num =(e)=>{
    if (e>=50 || e<=90){
        return true
    }
    else{
        return false
    }
}
console.log(num(49))
console.log(num(50))
console.log(num(85))
console.log(num(90))
console.log(num(91))
*/

//if this code modified by condition then 

let num1 = parseInt(prompt("enter your chacking number"))

if (num1 >= 50 || num1 <= 90) {
    console.log(`your number ${num1} is between 50 to 90`)
}
else{
    console.log("your number is not in 50 to 90")
}