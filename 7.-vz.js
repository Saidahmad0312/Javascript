function formatPhoneNumber(numbers) {
    if (numbers.length !== 10 || !numbers.every(num => num >= 0 && num <= 9)) {
        return "Invalid input!";
    }

    const areaCode = numbers.slice(0, 3).join('');
    const firstPart = numbers.slice(3, 6).join('');
    const secondPart = numbers.slice(6).join('');

    return `(${areaCode}) ${firstPart}-${secondPart}`;
}

console.log(formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
console.log(formatPhoneNumber([5, 5, 5, 1, 2, 3, 4, 5, 6, 7]));
console.log(formatPhoneNumber([1, 2, 3, 4, 5]));
