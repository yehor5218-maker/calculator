let display = document.getElementById('display');
let currentInput = '';
let operator = '';
let previousInput = '';

function appendNumber(num) {
    currentInput += num;
    display.value = currentInput;
}

function appendOperator(op) {
    if (currentInput !== '') {
        previousInput = currentInput;
        operator = op;
        currentInput = '';
    }
}

function calculate() {
    if (operator && currentInput && previousInput) {
        let result;
        const prev = parseFloat(previousInput);
        const current = parseFloat(currentInput);

        switch(operator) {
            case '+':
                result = prev + current;
                break;
            case '-':
                result = prev - current;
                break;
            case '*':
                result = prev * current;
                break;
            case '/':
                result = prev / current;
                break;
            default:
                return;
        }

        display.value = result;
        currentInput = result;
        operator = '';
        previousInput = '';
    }
}

function clearDisplay() {
    currentInput = '';
    operator = '';
    previousInput = '';
    display.value = '';
}
