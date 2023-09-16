let id1 = document.getElementById("id1");
let sp1 = document.getElementById("sp1");
console.log(id1);
console.log(sp1);

//matches method
console.log(id1.matches(".class"));
console.log(id1.matches(".box"));

//closest method
console.log(sp1.closest(".box"));

//contains method
console.log(sp1.contains(sp1));
console.log(id1.contains(sp1));
console.log(sp1.contains(id1)); //because id1 is not contain in sp1, sp1 is contan in id1 thats why upper line output is true and this output is going false
console.log(id2.contains(sp1)); //output is false ,because sp1 is not contain in id2.
