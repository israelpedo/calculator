const listOfButtons = document.querySelectorAll('input[type=button]');
const calc = document.querySelector('#calc');
const fieldResult = document.querySelector('#fieldResult');
let operator = null;
let number1 = 0;
let number2 = 0;
let result = 0;

for(let i = 0; i < listOfButtons.length; i++) {

    const key = listOfButtons[i];

    key.onclick = function() {
        switch(key.className) {
            case 'number':
                fieldResult.value = fieldResult.value + key.value;
            break;
            case 'operators':
                operator = key.value;
                number1 = fieldResult.value;

                calc.value = fieldResult.value + key.value;
                fieldResult.value = null; 
            break;
            case 'equals':
                number2 = fieldResult.value;

                calc.value = calc.value + fieldResult.value + key.value;
                checkOperator(operator, number1, number2);
            break;
            case 'clear':
                calc.value = null;
                fieldResult.value = null;
            break;
            default:
              // code block
        }
    }
}

function checkOperator(operator, number1, number2) {
    switch(operator) {
        case '+':
            add(number1, number2);
        break;
        case '-':
            subtract(number1, number2);
        break;
        case 'X':
            multiply(number1, number2);
        break;
        case '/':
            divide(number1, number2);
        break;
        default:
          // code block
    }
}

function add(number1, number2) {
    result = parseFloat(number1) + parseFloat(number2);
    fieldResult.value = result
}
function subtract(number1, number2) {
    result = parseFloat(number1) - parseFloat(number2);
    fieldResult.value = result
}
function multiply(number1, number2) {
    result = parseFloat(number1) * parseFloat(number2);
    fieldResult.value = result
}
function divide(number1, number2) {
    result = parseFloat(number1) / parseFloat(number2);
    fieldResult.value = result
}