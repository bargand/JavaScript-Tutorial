let sum = 0;
let n = prompt("Enter the value of n> ");
n = Number.parseInt(n);
for (let i = 0; i < n; i++) {
  sum += i + 1;
}
console.log("the sum of first " + n + " numbers is " + sum);
/*
let sum = 0;
let n = prompt("Enter the value of n>");
n = Number.parseInt(n);
for (let i = 0; i < n; i++) {
  sum += i + 1;
  console.log(
    "sum of first " + i + " + " + (i + 1) + " natural number is " + sum
  );
}
*/