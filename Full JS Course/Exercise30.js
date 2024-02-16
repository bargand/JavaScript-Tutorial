//Write a JavaScript program to check whether a string "Script" appears at the 5th (index 4) position in a given string. If "Script" appears in the string, return the string without "Script" otherwise return the original one. 

let str =(e)=>{
    if (e.indexOf("script") === 4){
        return e.replace("script", " ")
    }
    else{
        return e
    }
}
console.log(str("Javascript"))
console.log(str("Javscript"))
console.log(str("script"))
console.log(str("Debarghascript"))
