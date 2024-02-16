//Write a JavaScript program to check whether a string starts with 'Java' if it does not otherwise.

let str = (e)=>{
    if (e == null || e == undefined || e.substring(0 , 4) === "java") {
        return true
    }
    else{
        return false
    }
}
console.log(str("javascript"))
console.log(str("JAVASCRIPT"))
console.log(str("debargha"))
console.log(str(" "))
console.log(str(" java"))