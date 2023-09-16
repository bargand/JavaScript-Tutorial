let a = prompt("Hey whats your age ?: ");
a = Number.parseInt(a);
// console.log (typeof a)
if (a < 0) {
  alert("Hey Man You are not exist in the world!!");
} 
else if (1 > a < 400) {
  if (a < 400) {
    alert("Good job man");
  } 
  else {
    alert("You are old man -- When you Die?");
  }
} 
else {
  alert("this is not a valid age");
}
