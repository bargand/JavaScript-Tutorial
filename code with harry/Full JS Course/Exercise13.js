// write a js programme to convert temperature to and from celsius, farenhite
//C = (°F - 32) × 5/9
//F = (C * 9/5) + 32

let a = parseInt(prompt("Enter the value of DEGREE: "))
let b = prompt("If it is Farenhite enter f , for celsius enter c")

if (b == "f") {
    console.log(`Farenhite To Celsius Convertion is: ${(a - 32) * 5/9}`)
}
else if (b == "c"){
    console.log(`celsius to Farenhite conversion is: ${(a * 9/5) + 32}`)
}
else{
    console.log("i do not understand your enteruption")
}