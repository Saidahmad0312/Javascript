function countTrueValues(arr) {
    let trueCount = 0;
    for (let value of arr) {
        if (value === true) {
            trueCount++;
        }
    }
    return trueCount;
}

console.log(countTrueValues([true, false, true, true, false]));
console.log(countTrueValues([false, false, false]));
console.log(countTrueValues([true, true, true]));
