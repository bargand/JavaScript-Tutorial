function myFunction1() {
  let person = prompt("Enter your Name", "Debargha nandi");
  document.getElementById("demo1").innerHTML = `my name is ${person}`;
}

function myFunction2(){
    alert("are you sure to submited this?")
    document.getElementById("demo2").innerHTML=`your information is submited in our backend`
}

function myFunction3(){
    confirm("are you sure?")
    document.getElementById("demo3").innerHTML=`your information is reseted`
}