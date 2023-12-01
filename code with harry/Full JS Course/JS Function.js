//function are 2 types the are basic function and arrow function

/*
//basic function
import * as x from 'casper'
function a(name) {
    console.log(`hey ${name} you are nice`)
    console.log(`hey ${name} you are good`)
    console.log(`hey ${name} you are good too`)
    console.log(`hey ${name} you are vary nice`)
}
a("tubai")

//arrow function

let b = (name) => {
    console.log(`hey ${name} you are nice`)
    console.log(`hey ${name} you are good`)
    console.log(`hey ${name} you are good too`)
    console.log(`hey ${name} you are vary nice`)
}
b("debu")

// let c = (x, y) => {
    //     console.log(x + y)
    // }
    // c(2, 3)
    
let c = (a , b) =>{
    console.log(a*b)
}
c(5445111 ,5445465)

//another way to call the function
let d = (a , b) =>{
    return(a+b)
}
result = d(1 ,5)

console.log(`The sum of a and b is = ${result}`)
*/

//function with default perameater here the z is a defult peramiter

let sum =(x , y , z = 4)=>{
    return(x+y+z)
}
result = sum(1 , 2)
result2 = sum(1 , 2 , 3)

console.log(`the sum of a,b and c is = ${result} and when i pass the value of c then the result is ${result2}`)