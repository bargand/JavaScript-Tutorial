// Write a JavaScript program to rotate the string 'w3resource' in the right direction. This is done by periodically removing one letter from the string end and attaching it to the front.

// The JavaScript program continuously rotates the string 'w3resource' to the right by periodically moving the last character to the front. It uses the setInterval function to update the string every 100 milliseconds, modifying the text content of a specified HTML element by its ID.

function animate_string(ido) 
{
    var element = document.getElementById(ido);
    var textNode = element.childNodes[0]; // assuming no other children
    var text = textNode.data;

setInterval(function () 
{
 text = text[text.length - 1] + text.substring(0, text.length - 1);
  textNode.data = text;
}, 100);
}
animate_string('ido'); 