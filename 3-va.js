function countCharacters(text) {
    let characterCount = {};
    
    for (let char of text) {
        if (/[a-zA-Z]/.test(char)) {
            char = char.toLowerCase();
            characterCount[char] = (characterCount[char] || 0) + 1;
        }
        else if (/[0-9]/.test(char)) {
            characterCount['digits'] = (characterCount['digits'] || 0) + 1;
        }
    }
    
    return characterCount;
}

let text = "Hello, world! 123";
let result = countCharacters(text);
console.log(result);
