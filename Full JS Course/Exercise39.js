//Write a JavaScript program to find the closest value to 100 from two numerical values.

let closestNum =(x,y)=>{
    let num1 = 100-x
    let num2 = 100-y

    // console.log(Math.min(num1 , num2))
    if (num2 > num1){
        console.log(`${x} is closest of 100`)
    }
    else{
        console.log(`${y} is closest of 100`)
    }
}
closestNum(10, 99)