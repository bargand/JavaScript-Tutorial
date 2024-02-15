// Write a JavaScript program to check whether a given integer is within 20 of 100 or 400.

let integer=(e)=>{
    return ((Math.abs(100 - e) <= 20) || (Math.abs(400 - e)<=20))
}
console.log(integer(10))
console.log(integer(90))
console.log(integer(590))
console.log(integer(-190))