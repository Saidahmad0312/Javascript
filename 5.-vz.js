function multiplyWithoutOperator(num1, num2) {
    let result = 0;
    let isNegative = false;
    
    if ((num1 < 0 && num2 > 0) || (num1 > 0 && num2 < 0)) {
        isNegative = true;
    }
    
    num1 = Math.abs(num1);
    num2 = Math.abs(num2);
    
    for (let i = 0; i < num2; i++) {
        result += num1;
    }
    
    return isNegative ? -result : result;
}

console.log(multiplyWithoutOperator(5, 4));
console.log(multiplyWithoutOperator(-3, 6));
console.log(multiplyWithoutOperator(0, 10));
