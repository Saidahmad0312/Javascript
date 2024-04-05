function isEqual(str1) {
    return function(str2) {
        const chars1 = str1.split('').sort().join('');
        const chars2 = str2.split('').sort().join('');
        
        return chars1 === chars2;
    };
}

console.log(isEqual("abc")("bac"));
console.log(isEqual("apple")("elppa"));
console.log(isEqual("abcde")("abode"));
