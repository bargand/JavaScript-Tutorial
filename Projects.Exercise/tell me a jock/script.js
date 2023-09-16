let arr = ["debargha","riya","tubai","prabir","pabu","supriya","khudu","rituraj","saheb","kaka","jonty"]

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
let RandomNumber = randomNumber(1, 11);

console.log(arr[RandomNumber])
document.getElementById("RandomJocks").innerHTML = (arr[RandomNumber])
