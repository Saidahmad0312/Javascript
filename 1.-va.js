function transformString(input) {
    let words = input.split(" ");
    let result = [];

    for (let word of words) {
        if (word.length >= 3) {
            let transformedWord = word[0] + (word.length - 2) + word[word.length - 1];
            result.push(transformedWord);
        } else {
            result.push(word);
        }
    }

    return result.join(" ");
}

const input = "Every developer likes to mix kubernetes and javascript";
const result = transformString(input);
console.log(result);
