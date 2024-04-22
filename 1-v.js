function isSunday(year, month, day) {
    return new Date(year, month - 1, day).getDay() === 0;
}

function countJanuarySundays(startYear, endYear) {
    let sundayCount = 0;

    for (let year = startYear; year <= endYear; year++) {
        if (isSunday(year, 1, 1)) {
            sundayCount++;
        }
    }

    return sundayCount;
}

let startYear = 2000;
let endYear = 2050;
let sundayCount = countJanuarySundays(startYear, endYear);
console.log(`2000 dan 2050 gacha ${sundayCount} marta 1 yanvar yakshanba kuni bo'libdi.`);
