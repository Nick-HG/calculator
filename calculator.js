const output = document.querySelector('#output');
const equal = document.querySelector('#calculator .equal');
const numButtons = document.querySelectorAll('#calculator .number');
const operator = document.querySelectorAll('#calculator .operation');
const total = document.querySelector('.equal')
let firstNum = 0;
let operation = null;
let resetAfterOperation = false;



// Functions for basic arithmetic: add, subtract, multiply, and divide
function sum(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

// prints number to populate display
numButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        let value = e.currentTarget.textContent;
        if(resetAfterOperation) {
            output.value = value;
            resetAfterOperation = false;
        } else {
            output.value += value;
        }
    })
})

// registers operator clicked but maintains firstNum as the number displayed
operator.forEach(button => {
    button.addEventListener('click', event => {
        firstNum = Number.parseInt(output.value);
        operation = event.currentTarget.dataset.action;
        resetAfterOperation = true;  
    })
})
/* if resetAfterOperation false the operator 'click' is still listened,
 but the display doesn't move to secondNum, it populates on top of firstNum */


 
total.addEventListener('click', () => {
    if (!operation) {
        return;
    }
    resetAfterOperation = true;
    let secondNum = Number.parseInt(output.value) 
    
    if (operation === 'sum') {
        output.value = sum(firstNum, secondNum)
    } 
    else if (operation === 'subtract') {
        output.value = subtract(firstNum, secondNum)
    } 
    else if (operation === 'multiply') {
        output.value = multiply(firstNum, secondNum)
    }
    else if (operation === 'divide') {
        output.value = divide(firstNum, secondNum).toFixed(5)
    }
    
    // reset operation
    operation = null;
})

