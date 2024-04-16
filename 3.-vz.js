function minMax(arr) {
    if (arr.length === 0) {
        return [];
    }
    
    let min = Math.min(...arr);
    let max = Math.max(...arr);
    
    return [min, max];
}

console.log(minMax([1, 2, 3, 4, 5]));
console.log(minMax([10, -3, 0, 22, 8]));
console.log(minMax([]));
