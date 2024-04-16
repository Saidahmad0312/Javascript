const students = new Set([
    { name: "Amirbek", scores: [90, 85, 92] },
    { name: "Ibrohim", scores: [75, 80, 85] },
    { name: "Hamidullo", scores: [90, 95, 85] },
    { name: "Ahmad", scores: [100, 100, 100] }
]);

function calculateAverage(scores) {
    let total = scores.reduce((acc, curr) => acc + curr, 0);
    return total / scores.length;
}

function findTopScorer(students) {
    let topScore = -Infinity;
    let topStudents = [];

    students.forEach(student => {
        let averageScore = calculateAverage(student.scores);
        if (averageScore > topScore) {
            topScore = averageScore;
            topStudents = [{ name: student.name, average: averageScore }];
        } else if (averageScore === topScore) {
            topStudents.push({ name: student.name, average: averageScore });
        }
    });

    return topStudents;
}

const result = findTopScorer(students);
console.log(result);
