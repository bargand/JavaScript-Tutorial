/*
//question 1. creat a nav bar and change the color of its first element to red

document.getElementById("NavBarColorChange").style.color ="red";
*/ 

/*
//question 2. create a table without tbody now use "view page source" button the check wheather it has a tbody or not
let t = document.getElementsByClassName("table")[0]
console.log(t)
console.log(t.tHead)
console.log(t.tBody)  //outpt is undefined
*/

/*
//question 3. create an element with 3 children now change the color of first and last element to green
// document.getElementById("nameChange1").style.color = "green"
// document.getElementById("nameChange2").style.color = "green"
document.getElementsByTagName("body")[1].firstElementChild.computedStyleMap.color = "green"
*/

/*question 4. change the nav bar background color is cyan 
*/
Array.from(document.getElementsByTagName("li")).forEach(element) =>{
    element.style.background = "cyan"
}
