import React, { useState } from "react";
import { TaskInput } from "./components/Input";
import { TaskList } from "./components/Lists";

export interface Todo {
  id: number;
  task: string;
}

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTask = (task: string) => {
    if (task.trim() === "") {
      alert("Please enter a valid task.");
      return;
    }

    const newTodo: Todo = {
      id: Date.now(),
      task,
    };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  const removeTask = (id: number) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="bg-pink-100 min-h-screen flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-lg">
        <h1 className="text-2xl font-bold mb-6 text-center text-pink-700">
          To-Do List
        </h1>
        <TaskInput onAddTask={addTask} />
        <TaskList todos={todos} onRemoveTask={removeTask} />
      </div>
    </div>
  );
};

export default App;
