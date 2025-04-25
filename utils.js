export function validateEquation(equation) {
    // Проверка на наличие хотя бы одного оператора
    const operators = ['+', '-', '*', '/'];
    const hasOperator = operators.some(op => equation.includes(op));

    if (!hasOperator) {
        return 'в выражении должны использоваться только операторы +, -, /, *';
    }

    // Проверка на наличие операндов
    const parts = equation.split(/[+-*/]/);
    const operands = parts.filter(part => part.trim() !== '');

    if (operands.length !== 2) {
        return 'не хватает одного или нескольких операндов';
    }

    // Проверка на то, что операнды - это числа
    for (const operand of operands) {
        if (!/^d$/.test(operand)) {
            return 'операнды могут быть только числами';
        }
    }

    return '';
}

export function calcEquation(equation) {
    const error = validateEquation(equation);
    if (error) {
        return '';
    }

    const result = eval(equation);
    return result.toString();
}
