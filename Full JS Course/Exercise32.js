//detect the value of number

function formatNumber(num) {
    if (num >= 1000000) {
        return (num / 1000000).toFixed(1) + 'M';
    } else if (num >= 1000) {
        return (num / 1000).toFixed(1) + 'K';
    } else {
        return num.toString();
    }
}

// Example usage:
const number1 = 1500;
const number2 = 45000000000;

console.log(formatNumber(number1)); // Output: 1.5K
console.log(formatNumber(number2)); // Output: 45M
