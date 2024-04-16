function largestEven(nums) {
    let largestEvenNum = -1;

    for (const num of nums) {
        if (num % 2 === 0 && num > largestEvenNum) {
            largestEvenNum = num;
        }
    }

    return largestEvenNum;
}

console.log(largestEven([3, 7, 2, 1, 7, 9, 10, 13]));
console.log(largestEven([1, 3, 5, 7]));
console.log(largestEven([0, 19, 18973623]));
