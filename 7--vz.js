function findUniqueValues(arr) {
    let uniqueValues = [];

    for (let i = 0; i < arr.length; i++) {
        if (uniqueValues.indexOf(arr[i]) === -1) {
            uniqueValues.push(arr[i]);
        }
    }
    
    return uniqueValues;
}

console.log(findUniqueValues([1, 2, 2, 3, 4, 4, 5]));
console.log(findUniqueValues([1, 2, 3, 4, 5]));
console.log(findUniqueValues([1, -2, -2, 3, 4, -5, -6, -5]));
