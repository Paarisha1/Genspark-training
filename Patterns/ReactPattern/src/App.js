import React from "react";
import Todo from "./components/ToDo"; // Adjust the path if Todo.jsx is in a different folder

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Todo Application</h1>
        <Todo />
      </header>
    </div>
  );
}

export default App;
