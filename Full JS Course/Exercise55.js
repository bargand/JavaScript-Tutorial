//Calculate the sum of numbers within an array

// let a = [1,2,3,4,5]
// let b = a.length
// for (let i = 0; i < b; i++) {
//     console.log(a[i])
// }


let arr = [1,2,3,4,5,6,7,8,9]
let sum = arr.reduce((a,b)=>a+b, 0) //when we call 0 in this array function then we call full function,orthat a and b 1 abong 2 chara sob gulo k call korchi
console.log(sum)
