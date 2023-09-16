if (new Date().getHours() < 12) {
  document.getElementById("demo").innerHTML = "Good Day!";
} else if (new Date().getHours() < 14) {
  document.getElementById("demo").innerHTML = "Good Noon!";
} else if (new Date().getHours() < 16) {
  document.getElementById("demo").innerHTML = "Good AfterNoon!";
} else if (new Date().getHours() < 6) {
  document.getElementById("demo").innerHTML = "Good Evening!";
} else {
  document.getElementById("demo").innerHTML = "Good Noon!";
}
 