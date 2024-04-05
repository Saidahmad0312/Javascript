function calc(n, m) {
    let total = 0;
    for (let i = 1; i <= n; i++) {
        total += Math.pow(i, m);
    }
    return total;
}

console.log(calc(3, 2));
