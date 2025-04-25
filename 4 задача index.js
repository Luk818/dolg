import { validateEquation, calcEquation } from './utils.js';

document.querySelector('.input-validation').addEventListener('submit', function(event) {
    event.preventDefault();

    const equationInput = document.getElementById('equation');
    const errorOutput = document.querySelector('.error-output');
    const resultOutput = document.querySelector('.result');

    // Получаем значение из инпута
    const equation = equationInput.value;

    // Проверяем выражение
    const validationError = validateEquation(equation);
    
    if (validationError) {
        errorOutput.textContent = validationError;
        equationInput.classList.add('error');
        resultOutput.textContent = '';
        return;
    } else {
        errorOutput.textContent = '';
        equationInput.classList.remove('error');
    }

    // Вычисляем результат
    const result = calcEquation(equation);
    
    resultOutput.textContent = result !== '' ? result : 'Некорректное выражение';
});
