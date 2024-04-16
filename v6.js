function addHyphens(s) {
    const words = s.split(" ");
    const result = [];

    for (const word of words) {
        if (word.length > 10) {
            const parts = [];
            for (let i = 0; i < word.length; i += 10) {
                parts.push(word.substr(i, 10));
            }
            if (word.length % 2 !== 0) {
                parts[parts.length - 2] += '-';
            }
            result.push(parts.join('-'));
        } else {
            result.push(word);
        }
    }

    return result.join(' ');
}

const inputs = [
    "Assalomu Alaykum Javohir",
    "Robocontest contest",
    "Bilmasvoyta'tilda Bilmasvo-yta'tilda"
];

for (let i = 0; i < inputs.length; i++) {
    console.log(`# input${i + 1}`);
    console.log(inputs[i]);
    console.log(`output${i + 1}`);
    console.log(addHyphens(inputs[i]));
}
