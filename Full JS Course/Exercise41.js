//write a JS programme to print the following after 2 sec delay- hello world
/*
let print = async()=>{
    setTimeout(() => {
        console.log('hello world')
    }, 2000);
}
print()
*/

//write a JS programme to find average of numbers in any array using spread syntsx.

const ArrayNmbers = [2,3,3,5,7,10]

let sum =(...argu)=>{
    return argu.reduce((a, b) => a+b, 0)
}
let a = sum(...ArrayNmbers)
let b = ArrayNmbers.length

console.log(a/b)
