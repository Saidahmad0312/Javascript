function move(arr, fromIndex, toIndex) {
    if (toIndex < 0) {
        toIndex = arr.length + toIndex;
    }
    let element = arr.splice(fromIndex, 1)[0];
    arr.splice(toIndex, 0, element);
    return arr;
}

console.log(move([10, 20, 30, 40, 50], 0, 2));
console.log(move([10, 20, 30, 40, 50], -1, -2));
