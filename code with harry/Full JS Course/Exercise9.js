/*
//create a fulty calculator

//1. it takes 2 numbers as a input from the user
//2. it performs wrong operation as follows: + ---> - , * ---> + , - ---> / ,  // ---> **
// it performs wrong operation 10% of the times

alert("enter your numbers and operator")
let a = prompt("Enter first number");
let b = prompt("Enter second number");

let op = prompt("Enter operation");

if (op == "+") {
    alert(a - b);
} else if (op == "-") {
    alert(a / b);
} else if (op == "*") {
    alert(a + b);
} else if (op == "/") {
    alert(a - b);
} else if (op == "//") {
    alert(a ** b);
} else {
    alert("Wrong operation");
}


//another way to define a faulty calculator
function faultyCalculator() {
    // Take input from the user
    let num1 = parseFloat(prompt("Enter the first number:"));
    let num2 = parseFloat(prompt("Enter the second number:"));
    
    // Define the list of possible operations
    const operations = ['+', '-', '*', '//'];
    
    // Perform the wrong operation 10% of the times
    if (Math.random() < 0.1) {
        // Choose a random wrong operation
        const wrongOperation = operations[Math.floor(Math.random() * operations.length)];
        
        // Perform the wrong operation
        if (wrongOperation === '+') {
            result = num1 - num2;
        } else if (wrongOperation === '-') {
            result = num1 / num2;
        } else if (wrongOperation === '*') {
            result = num1 + num2;
        } else if (wrongOperation === '//') {
            result = Math.pow(num1, num2);
        }
        
        console.log(`Oops! Wrong operation (${wrongOperation}) performed.`);
    } else {
        // Perform the correct operation
        let operation = prompt("Enter the operation (+, -, *, //):");
        let result;
        
        if (operation === '+') {
            result = num1 + num2;
        } else if (operation === '-') {
            result = num1 - num2;
        } else if (operation === '*') {
            result = num1 * num2;
        } else if (operation === '//') {
            result = Math.floor(num1 / num2);
        } else {
            console.log("Invalid operation. Please enter +, -, *, or //.");
            return;
        }
        
        console.log(`The result is: ${result}`);
    }
}

// Run the faulty calculator
faultyCalculator();
*/

//Code With Harry Solution

let random = Math.random();
console.log(random);

let a = prompt("Enter first number");
let c = prompt("Enter operation");
let b = prompt("Enter second number");

let obj ={
    "+" : "*"
    ,"-" : "/"
    ,"*" : "+"
    ,"/" : "-"
    ,"//" : "**"
    ,"**" : "//"
}


if (random > 0.1){
    console.log(`the result is ${a}${c}${b}`)
    alert(`the result is ${eval(`${a}${c}${b}`)}`)
}
else{
    c = obj[c]
    console.log(`the result is ${a}${c}${b}`)
    alert(`the result is ${eval(`${a}${c}${b}`)}`)
}