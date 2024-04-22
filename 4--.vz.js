async function fetchTodosByUserId(userId) {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/todos`);
      const todos = await response.json();

      const userTodos = todos.filter(todo => todo.userId === userId);
  
      console.log(`UserID ${userId} bo'yicha todolar:`);
      userTodos.forEach(todo => {
        console.log(todo);
      });
  
    } catch (error) {
      console.error('Xatolik yuz berdi:', error);
    }
  }
  
  fetchTodosByUserId(1);
  