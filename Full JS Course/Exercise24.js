// Write a JavaScript program to create another string from a given string with the first character of the given string added to the front and back.

let str = (e) =>{
    if (e.length <= 1){
        return e
    }
    let firstChar = e.charAt(0)
    return firstChar + e + firstChar
}
console.log(str("i"))
console.log(str("hi"))
console.log(str("hlo"))