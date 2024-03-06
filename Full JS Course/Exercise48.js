//Write a JavaScript program to check whether three given numbers are increasing in strict or in soft mode.
//Note: Strict mode -> 10, 15, 31 : Soft mode -> 24, 22, 31 or 22, 22, 31

// Define a function named number_order with parameters x, y, and z
function number_order(x, y, z) {
    // Check if y is greater than x and z is greater than y
    if (y > x && z > y) {
      return "strict mode";    
    } 
    // Check if z is greater than y
    else if (z > y) {
      return "Soft mode";
    } 
    // If none of the conditions are met, return "Undefined"
    else {
      return "Undefined";
    }
  }
  
  // Log the result of calling number_order with the arguments 10, 15, and 31 to the console
  console.log(number_order(10, 15, 31));
  
  // Log the result of calling number_order with the arguments 24, 22, and 31 to the console
  console.log(number_order(24, 22, 31));
  
  // Log the result of calling number_order with the arguments 50, 21, and 15 to the console
  console.log(number_order(50, 21, 15)); 
  