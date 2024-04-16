function minRemoveToMakeValid(s) {
    const stack = [];
    const indicesToRemove = new Set();

    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (char === '(') {
            stack.push(i);
        } else if (char === ')') {
            if (stack.length !== 0) {
                stack.pop();
            } else {
                indicesToRemove.add(i);
            }
        }
    }

    stack.forEach(index => indicesToRemove.add(index));

    let result = '';
    for (let i = 0; i < s.length; i++) {
        if (!indicesToRemove.has(i)) {
            result += s[i];
        }
    }

    return result;
}

console.log(minRemoveToMakeValid("lee(t(c)o)de)"));
console.log(minRemoveToMakeValid("a)b(c)d"));
console.log(minRemoveToMakeValid("))(("));
