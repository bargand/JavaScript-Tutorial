/*
let obj = {
  a: 1,
  b: "debargha",
};
console.log(obj);

//prototype = jpkhon alada alada onject er vitorer veriaable aki hoi tokhon aki jinis sob jaigai bebohatr na kore amra protype bebohar kori jar fole akta object er vitore ja ache seta onno object er vitore chole jai.

let animal = {
  eats: true,
  walk: true,
  run: true,
};
let man = {
  read: true,
  wright: true,
};
let cow = {
  seeing: true,
};

//man er sathe animal er prototype , animal a j object veriable guli ache se guli nam a replicate hobe, kintu 2nd lineta(24 no line)jodi vabi man er variable cow a replicate hobe seta vul. cow er veriable man a replicate hobe.
man.__proto__ = animal;
man.__proto__ = cow;
cow.__proto__ = animal;
*/

/*
//oop s concept with class

class animal {
  constructor(name) {
    this.name = name;
    console.log("object is created");
  }
  eats() {
    console.log("khacchi");
  }
  jumps() {
    console.log("lafacchi");
  }
}
let a = new animal("bunny");
console.log(a);

//jokhon amra constractor k over right korte chai jemon ta kora ache j animal a j constractor line a o aki kintu line a message ta alada tokhon amra supar keyword use kori.

class lion extends animal {
  constructor(name) {
    super(name)
    console.log("object is created for lion");
  }
  howling() {
    return true;
  }
}
let b = new lion("Shera");
console.log(b);
*/

//practice

class Teacher{
    constructor(){
        console.log('Common Teacher')
    }
    MathaTeacher(){
        console.log('Bablu Mondal')
    }
    BengaliTeacher(){
        console.log('Newton Mokami')
    }
    EnglishTeacher(){
        console.log('Nabakumar Mandal')
    }
}
let a = new Teacher()
console.log(a)

class FifthClass extends Teacher{
    constructor(){
        super()
        console.log('5th Class Teacjers')
    }
    PhysicalScienceTeacher(){
        console.log('Manik Pal')
    }
    LifeScienceTeacher(){
        console.log('Dibbendu Dhara')
    }
}
let b = new FifthClass()
console.log(b)