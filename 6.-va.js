const afterNYears = (people, n) => {
    for (let person in people) {
        if (n >= 0) {
            people[person] += n;
        } else {
            people[person] += Math.abs(n);
        }
    }
    return people;
};

const people = {
    "John": 30,
    "Alice": 25,
    "Bob": 40
};

const n = 5;
console.log(afterNYears(people, n));
