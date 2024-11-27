interface Todo {
    id: number;
    task: string;
  }
  
  class TodoList {
    private todos: Todo[] = [];
    private currentId: number = 1;
  
    addTask(task: string): void {
      this.todos.push({ id: this.currentId++, task });
      this.renderTodos();
    }
  
    removeTask(id: number): void {
      this.todos = this.todos.filter(todo => todo.id !== id);
      this.renderTodos();
    }
  
    private renderTodos(): void {
      const todoListElement = document.getElementById("todoList") as HTMLUListElement;
      todoListElement.innerHTML = this.todos.length
        ? this.todos
            .map(
              todo => `<li class="mb-2 flex justify-between">${todo.id}: ${todo.task}
               <button class="bg-red-500 text-white px-2 py-1 rounded ml-4" onclick="todoList.removeTask(${todo.id})">Remove</button></li>`
            )
            .join('')
        : "<li>No tasks available</li>";
    }
  
    showTodos(): void {
      console.log(this.todos.length ? this.todos : "No tasks available.");
    }
  }
  
  const todoList = new TodoList();
  
  document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("addTaskButton")?.addEventListener("click", () => {
      const taskInput = document.getElementById("taskInput") as HTMLInputElement;
      if (taskInput.value.trim()) {
        todoList.addTask(taskInput.value.trim());
        taskInput.value = "";
      }
    });
  
    document.getElementById("showTasksButton")?.addEventListener("click", () => {
      todoList.showTodos();
    });
  });
  