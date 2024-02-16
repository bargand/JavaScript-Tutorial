//Write a JavaScript program to check a pair of numbers and return true if one of the numbers is 50 or if their sum is 50. 

let num1 = parseInt(prompt("Enter your first number"))
let num2 = parseInt(prompt("Enter your second number"))
let num3 = (num1+num2)
console.log(num3)

if ( num1 == 50 || num2 == 50 || num3 == 50 ){
    alert(`your provided two number's sum is ${num3} and it is True`)
}
else{
    alert(`your provided two number's sum is ${num3} and it is False`)
}
