let str1 = "Lorem, ipsum dolor sit lorem dolor.";

str1 = str1.replace(/[.,?!]/g, '');
str1 = str1.toLowerCase();

let wordMap = new Map();

let words = str1.split(' ');

for (let word of words) {
    if (wordMap.has(word)) {
        wordMap.set(word, wordMap.get(word) + 1);
    } else {
        wordMap.set(word, 1);
    }
}

console.log("OUTPUT:", Object.fromEntries(wordMap));
