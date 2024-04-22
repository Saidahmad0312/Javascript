function lastday(year, month) {
    let date = new Date(year, month + 1, 0);
    return date.getDate();
}

console.log(lastday(2014, 0));
