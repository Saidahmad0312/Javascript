function countUsers(users) {
    let adminCount = 0;
    let moderatorCount = 0;
    let otherUsersCount = 0;

    for (let user of users) {
        if (user === 'admin') {
            adminCount++;
        } else if (user === 'moderator') {
            moderatorCount++;
        } else {
            otherUsersCount++;
        }
    }

    return adminCount + moderatorCount + otherUsersCount;
}

const users1 = ['user1', 'user2', 'admin', 'user3', 'moderator'];
console.log(countUsers(users1));

const users2 = ['user1', 'user2', 'user3'];
console.log(countUsers(users2));

const users3 = [];
console.log(countUsers(users3));
