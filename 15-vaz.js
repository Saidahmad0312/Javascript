// class Math{
//     add(a,b){
//         return a+b
//     }
//     sub(a,b){
//         return a-b
//     }
//     multply(a,b){
//         return a*b
//     }
//     div(a,b){
//         return a/b
//     }
//     pow(a,b){
//         return a**b
//     }
// }
// const math = new Math()
// console.log(math.pow(5,6));





class TodoList {
    tasks = []

    addTasks(task){
        this.tasks.push(task)
        console.log(this.tasks,task);
    }
}
const task = new TodoList()
task.addTasks("learning")
task.addTasks("working")
task.addTasks("sleeping")