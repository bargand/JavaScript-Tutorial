//color element with js.
document.getElementById("name").style.color = "red"
document.getElementById("didiname").style.color = "green"
console.log(document.body.firstChild)
console.log(document.body.lastChild)
console.log(document.body.childNodes)
console.log(document.body.childElementCount)
//when we try to chane the childNodes to array
let arr = Array.from(document.body.childNodes)
console.log(arr)