//Write a JavaScript program to create another string by adding "Py" in front of a given string. If the given string begins with "Py" return the original string.

let MyString = (e) => {
  if (e == null || e == undefined || e.substring(0, 2) == "py") {
    return e;
  } else {
    return "py" + e;
  }
};
console.log(MyString("redium"));
console.log(MyString("thon"));
