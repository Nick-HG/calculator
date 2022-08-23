const output = document.querySelector('#output');
const equal = document.querySelector('#calculator .equal');
let firstNum = 0;
let operation = null;
let resetAfterOperation = false;



// Functions for basic arithmetic: add, subtract, multiply, and divide
function add(a, b) {
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
document.querySelectorAll('#calculator .number').forEach(button => {
    button.addEventListener('click', event => {
        let value = event.currentTarget.textContent;
        if(resetAfterOperation) {
            output.value = value;
            resetAfterOperation = false;
        } else {
            output.value += value;
        }
    })
})

// registers operator clicked but maintains firstNum as the number displayed
document.querySelectorAll('#calculator .operation').forEach(button => {
    button.addEventListener('click', event => {
        firstNum = output.value;
        operation = event.currentTarget.dataset.action;
        resetAfterOperation = true;  
    })
})
/* if resetAfterOperation false the operator 'click' is still listened,
 but the display doesn't move to secondNum, it populates on top of firstNum */


 
equal.addEventListener('click', () => {
    if (!operation) {
        return;
    }
    resetAfterOperation = true;
    let secondNum = output.value
    
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
        output.value = divide(firstNum, secondNum)
    }
    // reset operation
    operation = null;
})


// function clear() {
//     const clearBtn = document.querySelector('.clear');
//     clearBtn.addEventListener('click', () => {
//         window.location.reload();
//     });
//     const clearInput = document.getElementById('output');
//     clearInput.innerText = 'none';
// }
// clear();  // this works whilst <input> does not include 'readonnly'
