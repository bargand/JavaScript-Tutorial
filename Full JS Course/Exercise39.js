//Write a JavaScript program to find the closest value to 100 from two numerical values.

let closestNum = (x, y) => {
  if (x != y) {
    let num1 = Math.abs(100 - x);
    let num2 = Math.abs(100 - y);

    if (num1 < num2) {
      console.log(`${x} is your closest number of 100`);
    } else if (num2 < num1) {
      console.log(`${y} is your closest number of 100`);
    } else {
      return 0;
    }
  } else {
    console.log('Please enter the different number')
  }
};
closestNum(10, 99);
closestNum(100, 99);
closestNum(0, 99);
closestNum(10, 10);
