function splitNumber(number) {
    const half1 = Math.floor(number / 2);
    const half2 = Math.ceil(number / 2);
    return [half1, half2];
}

console.log(splitNumber(7));
console.log(splitNumber(8));
