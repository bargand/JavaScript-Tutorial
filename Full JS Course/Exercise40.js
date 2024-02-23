//Write a JavaScript program to check whether two numbers are in the range 40..60 or 70..100 inclusive.



function checkRange(num1, num2) {
    // Check if num1 is in the specified ranges
    if ((num1 >= 40 && num1 <= 60) || (num1 >= 70 && num1 <= 100)) {
        // Check if num2 is in the specified ranges
        if ((num2 >= 40 && num2 <= 60) || (num2 >= 70 && num2 <= 100)) {
            return true; // Both numbers are in the specified ranges
        }
    }
    return false; // At least one of the numbers is not in the specified ranges
}

// Test cases
console.log(checkRange(44, 56)); // Output: true
console.log(checkRange(70, 95)); // Output: false
console.log(checkRange(50, 89)); // Output: false
