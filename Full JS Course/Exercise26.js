//Write a JavaScript program to create a string from a given string. This is done by taking the last 3 characters and adding them at both the front and back. The string length must be 3 or more.

let str = (e)=>{
    if (e.length >=3 ){
        return e.slice(0 , 3) + e + e.slice(0 , 3)
    }
}
console.log(str("debargha"))
console.log(str("deb"))