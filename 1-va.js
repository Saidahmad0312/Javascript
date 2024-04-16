let ToDoList = {
    tasks: [],

    addTask(task) {
        this.tasks.push(task);
    },

    removeTask(index) {
        if (index >= 0 && index < this.tasks.length) {
            this.tasks.splice(index, 1);
        } else {
            console.log("Error: Invalid index!");
        }
    },

    printTasks() {
        if (this.tasks.length > 0) {
            console.log("Tasks:");
            this.tasks.forEach((task, index) => {
                console.log(`${index + 1}. ${task}`);
            });
        } else {
            console.log("No tasks to display.");
        }
    }
};

ToDoList.addTask("Buy groceries");
ToDoList.addTask("Finish homework");
ToDoList.addTask("Call mom");

ToDoList.printTasks();

ToDoList.removeTask(1);

ToDoList.printTasks();
