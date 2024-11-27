import React, { useState, useEffect, useContext, createContext } from "react";

// ------------------ Container Pattern ------------------
// Handles fetching and managing todos
const TodoContainer = ({ children }) => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    // Simulate data fetching
    const fetchTodos = async () => {
      const data = [
        { id: 1, text: "Learn React", completed: false },
        { id: 2, text: "Build a Todo App", completed: true },
{ id: 3, text: "Master Patterns", completed: false },
      ];
      setTodos(data);
    };
    fetchTodos();
  }, []);

  // Render Props: Pass todos and setTodos to children
  return children(todos, setTodos);
};

// ------------------ HOC Pattern ------------------
// Enhances components with logging functionality
const withLogger = (WrappedComponent) => {
  return (props) => {
    useEffect(() => {
      console.log("Component Mounted:", WrappedComponent.name);
    }, []); // Log when the component mounts

    return <WrappedComponent {...props} />; // Render the wrapped component
  };
};

// ------------------ Render Props Pattern ------------------
// Handles filtering todos based on completion status
const TodoFilter = ({ todos, children }) => {
  const [filter, setFilter] = useState("all");

  // Filter todos based on the selected filter
  const filteredTodos = todos.filter((todo) => {
    if (filter === "completed") return todo.completed;
    if (filter === "active") return !todo.completed;
    return true;
  });

  return (
    <>
      {/* Filter Buttons */}
      <div className="flex space-x-4 mb-4">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded"
          onClick={() => setFilter("all")}
        >
          All
        </button>
        <button
          className="px-4 py-2 bg-green-500 text-white rounded"
          onClick={() => setFilter("completed")}
        >
          Completed
        </button>
        <button
          className="px-4 py-2 bg-yellow-500 text-white rounded"
          onClick={() => setFilter("active")}
        >
          Active
        </button>
      </div>

      {/* Render Props: Pass filtered todos to children */}
      {children(filteredTodos)}
    </>
  );
};

// ------------------ Hooks and Context ------------------
// Context for sharing todo operations
const TodoContext = createContext();

// Provider Component for managing todos
const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  return (
    <TodoContext.Provider value={{ todos, setTodos }}>
      {children}
    </TodoContext.Provider>
  );
};

// Custom Hook to access todos
const useTodos = () => useContext(TodoContext);

// ------------------ Compound Pattern ------------------
// Renders the list of todos
const TodoList = ({ children }) => {
  const { todos } = useTodos();
  return (
    <ul className="space-y-2">
      {todos.map((todo) => children(todo))} {/* Render each TodoItem */}
    </ul>
  );
};

// Renders a single todo item
const TodoItem = ({ todo }) => {
  const { setTodos } = useTodos();

  return (
    <li className="flex items-center space-x-4 bg-gray-100 p-4 rounded shadow">
      <input
        type="checkbox"
        className="h-5 w-5"
        checked={todo.completed}
        onChange={() =>
          setTodos((prevTodos) =>
            prevTodos.map((t) =>
              t.id === todo.id ? { ...t, completed: !t.completed } : t
            )
          )
        }
      />
      <span className={`${todo.completed ? "line-through text-gray-500" : ""}`}>
        {todo.text}
      </span>
    </li>
  );
};


const TodoApp = () => {
  const EnhancedTodoItem = withLogger(TodoItem); // HOC-enhanced component

  return (
    <TodoProvider>
      <div className="container mx-auto p-6 bg-gray-50 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-6 text-center">
          Todo Application
        </h1>
        <TodoContainer>
          {(todos, setTodos) => (
            <>
              <TodoFilter todos={todos}>
                {(filteredTodos) => (
                  <TodoContext.Provider
                    value={{ todos: filteredTodos, setTodos }}
                  >
                    <TodoList>
                      {(todo) => <EnhancedTodoItem key={todo.id} todo={todo} />}
                    </TodoList>
                  </TodoContext.Provider>
                )}
              </TodoFilter>
            </>
          )}
        </TodoContainer>
      </div>
    </TodoProvider>
  );
};

export default TodoApp;
