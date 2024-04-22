function flatten(arr) {
    return arr.reduce((acc, val) => Array.isArray(val) ? acc.concat(flatten(val)) : acc.concat(val), []);
}

function difference(arr1, arr2) {
    let mergedArray = arr1.concat(arr2);
    let uniqueElements = Array.from(new Set(flatten(mergedArray)));
    uniqueElements.sort((a, b) => a - b);
    return uniqueElements.map(String);
}

console.log(difference([1, 2, 3], [100, 2, 1, 10]));
console.log(difference([1, 2, 3, 4, 5], [1, [2], [3, [[4]]],[5,6]]));