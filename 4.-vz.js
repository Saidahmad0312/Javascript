function findFirstOdd(arr) {
    for (let num of arr) {
        if (num % 2 !== 0) {
            return num;
        }
    }
    return undefined;
}

console.log(findFirstOdd([2, 4, 6, 8, 9, 10]));
console.log(findFirstOdd([1, 2, 3, 4, 5]));
console.log(findFirstOdd([]));
