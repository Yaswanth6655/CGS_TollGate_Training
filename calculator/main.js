document.addEventListener('DOMContentLoaded', function () {
    const calculator = document.querySelector('.calculator');
    const keys = calculator.querySelector('.calculator-keys');
    const display = calculator.querySelector('.calculator-screen');

    keys.addEventListener('click', e => {
        if (!e.target.matches('button')) return;

        const key = e.target;
        const keyValue = key.textContent;
        const displayValue = display.value;
        const { type } = key.dataset;
        const { previousKeyType } = calculator.dataset;

        if (key.classList.contains('btn-light')) {
            if (displayValue === '0' || previousKeyType === 'operator') {
                display.value = keyValue;
            } else {
                display.value = displayValue + keyValue;
            }
            calculator.dataset.previousKeyType = 'number';
        }

        if (key.classList.contains('btn-info')) {
            calculator.dataset.firstValue = displayValue;
            calculator.dataset.operator = key.textContent;
            calculator.dataset.previousKeyType = 'operator';
        }

        if (key.classList.contains('btn-success')) {
            const firstValue = calculator.dataset.firstValue;
            const operator = calculator.dataset.operator;
            const secondValue = displayValue;

            display.value = calculate(firstValue, operator, secondValue);
        }

        if (key.textContent === 'C') {
            display.value = '';
            delete calculator.dataset.firstValue;
            delete calculator.dataset.operator;
            delete calculator.dataset.previousKeyType;
        }
    });

    function calculate(first, operator, second) {
        let result = '';

        if (operator === '+') {
            result = parseFloat(first) + parseFloat(second);
        } else if (operator === '-') {
            result = parseFloat(first) - parseFloat(second);
        } else if (operator === '*') {
            result = parseFloat(first) * parseFloat(second);
        } else if (operator === '/') {
            result = parseFloat(first) / parseFloat(second);
        }

        return result;
    }
});


    


    
    
    
    
    