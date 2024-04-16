function findLowerCaseVowels(arr) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let lowercaseVowels = [];

    for (let word of arr) {
        for (let char of word) {
            if (vowels.includes(char.toLowerCase())) {
                lowercaseVowels.push(char.toLowerCase());
                break;
            }
        }
    }

    return lowercaseVowels;
}

const words = ["Apple", "banana", "Orange", "mango"];
console.log(findLowerCaseVowels(words));
