const calculatorScreen = document.querySelector('.calculator-screen');
const calculatorKeys = document.querySelector('.calculator-keys');

let currentInput = '';
let expression = '';

function updateScreen(value) {
    calculatorScreen.value = value;
}

function handleNumber(number) {
    // Append the number to current input and expression
    currentInput += number;
    expression += number;
    updateScreen(expression);
}

function handleOperator(op) {
    // Append the operator to the expression if current input is not empty
    if (currentInput === '') return;
    currentInput = '';
    expression += ` ${op} `;
    updateScreen(expression);
}

function calculate() {
    try {
        // Evaluate the expression after replacing any non-standard operators
        const result = eval(expression.replace(/×/g, '*').replace(/÷/g, '/'));
        expression = result.toString();
        currentInput = result.toString();
        updateScreen(expression);
    } catch (error) {
        // Handle any errors in evaluation
        updateScreen('Error');
        expression = '';
        currentInput = '';
    }
}

function clearAll() {
    // Reset the calculator to its initial state
    expression = ' ';
    currentInput = ' ';
    updateScreen('0');
}

calculatorKeys.addEventListener('click', (event) => {
    const { target } = event;
    const { value } = target;
    if (!target.matches('button')) return;

    switch (value) {
        case '+':
        case '-':
        case '*':
        case '/':
            handleOperator(value);
            break;
        case '=':
            calculate();
            break;
        case 'AC':
            clearAll();
            break;
        default:
            handleNumber(value);
            break;
    }
});
