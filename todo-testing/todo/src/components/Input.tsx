import React, { useState } from "react";

interface TaskInputProps {
  onAddTask: (task: string) => void;
}

export const TaskInput: React.FC<TaskInputProps> = ({ onAddTask }) => {
  const [taskInput, setTaskInput] = useState("");

  const handleAddTask = () => {
    if (taskInput.trim()) {
      onAddTask(taskInput.trim());
      setTaskInput("");
    }
  };

  return (
    <div className="mb-4 bg-pink-100 p-4 rounded-lg shadow-md">
      <label
        htmlFor="taskInput"
        className="text-xl font-semibold text-pink-700 mb-3 block"
      >
        Add a Task
      </label>

      <input
        type="text"
        id="taskInput"
        value={taskInput}
        onChange={(e) => setTaskInput(e.target.value)}
        className="border border-pink-300 rounded-md w-full px-3 py-2 text-pink-900 bg-white"
        placeholder="Enter your task"
      />
      <button
        onClick={handleAddTask}
        className="bg-pink-500 text-white font-semibold px-4 py-2 mt-3 w-full rounded-md hover:bg-pink-600"
      >
        Add Task
      </button>
    </div>
  );
};
