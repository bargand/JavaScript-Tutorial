//Write a JavaScript program to test whether a string ends with "Script". The string length must be greater than or equal to 6.

let string = "javascript"
let lowerstring = string.toLowerCase()
let length = lowerstring.length

if (length >= 6 && typeof string === "string") {
    if (lowerstring.endsWith("script")) {
        console.log('the string is ends with script')
    }
    else{
        console.log('the string is not ends with script')
    }
}
else{
    console.log('the string length is less than 6')
}