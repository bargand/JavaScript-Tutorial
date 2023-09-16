function appendToDisplay(value) {
    const display = document.getElementById('calculatorDisplay');
    display.value += value;
}

function calculateResult() {
    const display = document.getElementById('calculatorDisplay');
    try {
        const result = eval(display.value);
        display.value = result;
    } catch (error) {
        display.value = "Error";
    }
}

function clearDisplay() {
    const display = document.getElementById('calculatorDisplay');
    display.value = '';
}

function removeLastCharacter() {
    const display = document.getElementById('calculatorDisplay');
    display.value = display.value.slice(0, -1);
}