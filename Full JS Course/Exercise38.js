//Write a JavaScript program to find the largest of three given integers.

let BigNymberDet = (x,y,z) => {
    const MaxNumber = Math.max(x,y,z)
    return MaxNumber
};
console.log(BigNymberDet(10,15,20))
console.log(BigNymberDet(1000,150,2))
console.log(BigNymberDet(10,-15,-20))
console.log(BigNymberDet(0,15,0))
console.log(BigNymberDet(0,1,0))
