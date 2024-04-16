function sumOfCubes(arr) {
    let sum = 0;
    for (let num of arr) {
        sum += Math.pow(num, 3);
    }
    return sum;
}

console.log(sumOfCubes([1, 2, 3]));
console.log(sumOfCubes([4, 5, 6]));
