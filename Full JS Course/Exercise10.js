/*
create a business name generator with function and random numbers with under adjectives

adjectives are:
crazy
amazing
Fire

Shop Name:
Engibe
Food 
Garments

Another Word:
Bros
Limited
Hub
*/
// function getRandomNumber() {
//   return Math.floor(Math.random() * 3 + 1);
// }
// const randomNumber = getRandomNumber();
// console.log(randomNumber);

/*
let adjectives = ()=>{
    let randomNumber = Math.floor(Math.random() * 3 + 1);
    console.log(randomNumber);
    if (randomNumber === 1) {
        console.log("Crazy");
    }
    else if (randomNumber === 2) {
        console.log("Amazing");
    }
    else if (randomNumber === 3) {
        console.log("Fire");
    }
    else {
        console.log("i could not understand");
    }
    
}
const randomNumber = adjectives();
console.log(randomNumber);


let adjectives = () => {
  let FirstRand = Math.floor(Math.random() * 3 + 1);
  
  if (FirstRand === 1) {
      console.log("Crazy");
    } else if (FirstRand === 2) {
        console.log("Amazing");
    } else {
        console.log("Fire");
    }
    
    return FirstRand;
};

// const FirstRand = adjectives();

let ShopName = () => {
  let SecRand = Math.floor(Math.random() * 3 + 1);

  if (SecRand === 1) {
    console.log("Engine");
} else if (SecRand === 2) {
    console.log("Food");
} else {
    console.log("Garments");
}

return SecRand;
};

// const SecRand = ShopName();

let AnotherWord = () => {
    let ThirdRand = Math.floor(Math.random() * 3 + 1);
    
    if (ThirdRand === 1) {
    console.log("Bros");
  } else if (ThirdRand === 2) {
      console.log("Limited");
    } else {
        console.log("Hub");
    }
    
    return ThirdRand;
};
// const ThirdRand = AnotherWord();




const FirstRand = adjectives();
const SecRand = ShopName(); 
const ThirdRand = AnotherWord();

// const combinedString = `${adjectives()} ${ShopName()} ${AnotherWord()}`;

*/

let adjectives = () => {
  let FirstRand = Math.random();

  if (FirstRand < 0.33) {
    console.log("Crazy");
  } else if (FirstRand < 0.66 && FirstRand > 0.33) {
    console.log("Amazing");
  } else {
    console.log("Fire");
  }

  return FirstRand;
};

// const FirstRand = adjectives();

let ShopName = () => {
  let SecRand = Math.random();

  if (SecRand < 0.33) {
    console.log("Engine");
  } else if (SecRand < 0.66 && SecRand > 0.33) {
    console.log("Food");
  } else {
    console.log("Garments");
  }

  return SecRand;
};

// const SecRand = ShopName();

let AnotherWord = () => {
  let ThirdRand = Math.random();

  if (ThirdRand < 0.33) {
    console.log("Bros");
  } else if (ThirdRand < 0.66 && ThirdRand > 0.33) {
    console.log("Limited");
  } else {
    console.log("Hub");
  }

  return ThirdRand;
};
// const ThirdRand = AnotherWord();

const FirstRand = adjectives();
const SecRand = ShopName();
const ThirdRand = AnotherWord();

const combinedString = (`${adjectives()} ${ShopName()} ${AnotherWord()}`);

console.log(`${adjectives()} ${ShopName()} ${AnotherWord()}`);
