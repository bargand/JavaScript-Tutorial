/*
//Write a JavaScript function that reverses a number.
function reverse(n) {
  n = n + "";
  return n.split("").reverse().join("");
}
console.log(Number(reverse(123456)));

//Write a JavaScript function that generates all combinations of a string.
function substrings(str1)
{
var array1 = [];
  for (var x = 0, y=1; x < str1.length; x++,y++) 
  {
   array1[x]=str1.substring(x, y);
    }
var combi = [];
var temp= "";
var slent = Math.pow(2, array1.length);

for (var i = 0; i < slent ; i++)
{
    temp= "";
    for (var j=0;j<array1.length;j++) {
        if ((i & Math.pow(2,j))){ 
            temp += array1[j];
        }
    }
    if (temp !== "")
    {
        combi.push(temp);
    }
}
  console.log(combi.join("\n"));
}

substrings("riya");

//Returns a passed string with letters in alphabetical order
function alphabet_order(str)
  {
return str.split('').sort().join('');
  }
console.log(alphabet_order("bargand"));
*/
//another use
function alphabet_order(str) {
  return str.split("").sort().join("");
}
console.log(alphabet_order("8768367122"));
