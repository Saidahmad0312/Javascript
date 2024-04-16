function solveEquation(equation) {
    const [left, right] = equation.split('=');
    
    const { xCoeff: leftXCoeff, constant: leftConstant } = parseSide(left);
    const { xCoeff: rightXCoeff, constant: rightConstant } = parseSide(right);
    
    const xCoeff = leftXCoeff - rightXCoeff;
    const constant = rightConstant - leftConstant;
    
    if (xCoeff === 0) {
        if (constant === 0) {
            return "Infinite solutions";
        } else {
            return "No solution";
        }
    }
    
    const x = constant / xCoeff;
    
    return `x=${x}`;
}

function parseSide(side) {
    let xCoeff = 0;
    let constant = 0;
    
    let currentNumber = '';
    let isNegative = false;
    
    for (let char of side) {
        if (char === '+' || char === '-') {
            if (currentNumber !== '') {
                if (currentNumber === 'x') {
                    xCoeff += isNegative ? -1 : 1;
                } else {
                    constant += (isNegative ? -1 : 1) * parseInt(currentNumber);
                }
            }
            currentNumber = '';
            isNegative = char === '-';
        } else {
            currentNumber += char;
        }
    }
    
    if (currentNumber !== '') {
        if (currentNumber === 'x') {
            xCoeff += isNegative ? -1 : 1;
        } else {
            constant += (isNegative ? -1 : 1) * parseInt(currentNumber);
        }
    }
    
    return { xCoeff, constant };
}

console.log(solveEquation("x+5-3+x=6+x-2"));
console.log(solveEquation("x=x"));
console.log(solveEquation("2x=x"));
