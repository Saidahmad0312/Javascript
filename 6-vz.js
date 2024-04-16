function squareNumber(n) {
    const numStr = n.toString();
    const newNum = numStr.split('').map(num => Math.pow(parseInt(num), 2)).join('');
    return parseInt(newNum);
}

console.log(squareNumber(3221));
console.log(squareNumber(3219));
