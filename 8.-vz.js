function addTrailingLetters(word) {
    let result = '';
    for (let i = 0; i < word.length; i++) {
        result += word[i];
        if (i !== word.length - 1) {
            result += '-';
        }
    }
    return result;
}

console.log(addTrailingLetters("JavaScript"));
console.log(addTrailingLetters("Hello")); 
