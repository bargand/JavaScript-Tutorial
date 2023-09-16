/*
//log method
console.log("log")

//assert method
console.assert(50>56)

//clear method
console.clear

//table method
let obj = {
  a:1 , b:2 , c:3 , d:4
}
console.table(obj)

//warn method
console.warn("this is warning")

//error method
console.error("this is an error")

//info method
console.info("this is an info")

//group method
//after group tag the consol.log is under the group, thats why debargha nandi is not under the group and riya to prabir is under the group.
console.log("debargha nandi")
console.group("this is a message group")
console.log("riya nandi pandit")
console.log("supriya nandi")
console.log("prabir kumar nandi")

//groupCollapsed method
//when we ask the group container then there we write this type of code
console.log("debargha nandi")
console.groupCollapsed("groupCollapsed")
console.log("riya nandi pandit")
console.log("supriya nandi")
console.groupEnd()
console.log("prabir kumar nandi")

//time and time end method
//for loop time method
console.time("a");
for (i = 0; i < 500; i++) {
  console.log("debargha nandi");
}
console.timeEnd("a");
*/

//while loop time method
console.time("b");
let i = 0;
while (i < 500) {
  console.log("debargha nandi");
  i++;
}
console.timeEnd("b");
