function remainingDaysUntilNextBirthday(birthday) {
    let today = new Date();
    let userBirthday = new Date(birthday);
    
    let nextBirthday = new Date(today.getFullYear(), userBirthday.getMonth(), userBirthday.getDate());
    if (nextBirthday < today) {
        nextBirthday.setFullYear(today.getFullYear() + 1);
    }

    let daysRemaining = Math.ceil((nextBirthday - today) / (1000 * 60 * 60 * 24));
    let remainingMonths = Math.floor(daysRemaining / 30);
    let remainingDays = daysRemaining % 30;

    return [remainingMonths, remainingDays];
}

let userBirthday = "2000-05-15";
let [remainingMonths, remainingDays] = remainingDaysUntilNextBirthday(userBirthday);
console.log(`Sizning keyingi tug'ilgan kuningizga ${remainingMonths} oy va ${remainingDays} kun qoldi.`);
