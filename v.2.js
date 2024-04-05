function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    let i = 5;
    while (i * i <= num) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
        i += 6;
    }
    return true;
}

function calc(n, m) {
    let total = 0;
    for (let i = n; i <= m; i++) {
        if (isPrime(i) && isPrime(i + 1)) {
            total += i;
        }
    }
    return total;
}

console.log(calc(1, 10));
