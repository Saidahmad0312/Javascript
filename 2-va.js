let Expenses = {
    water: 0,
    gas: 0,
    electricity: 0,

    addExpense(type, amount) {
        if (this.hasOwnProperty(type)) {
            this[type] += amount;
            console.log(`${type} expense added: $${amount}`);
        } else {
            console.log(`Error: ${type} is not a valid expense type.`);
        }
    },

    removeExpense(type, amount) {
        if (this.hasOwnProperty(type)) {
            if (this[type] >= amount) {
                this[type] -= amount;
                console.log(`${type} expense removed: $${amount}`);
            } else {
                console.log(`Error: Not enough ${type} expense to remove.`);
            }
        } else {
            console.log(`Error: ${type} is not a valid expense type.`);
        }
    },

    printExpenses() {
        console.log("Current Expenses:");
        for (let expense in this) {
            if (typeof this[expense] === "number" && expense !== "printExpenses") {
                console.log(`${expense}: $${this[expense]}`);
            }
        }
    }
};

Expenses.addExpense("water", 50);
Expenses.addExpense("gas", 30);
Expenses.addExpense("electricity", 80);
Expenses.printExpenses();

Expenses.removeExpense("gas", 10);
Expenses.printExpenses();

Expenses.addExpense("phone", 40);
