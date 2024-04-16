const removeCurse = (list, curse) => {
    let newList = list.filter(item => item !== curse);
    return newList;
};

const curses = ["Wolf", "Lion", "Ghost", "Zombie"];
const removedCurse = "Ghost";

const newList = removeCurse(curses, removedCurse);
console.log(newList);
