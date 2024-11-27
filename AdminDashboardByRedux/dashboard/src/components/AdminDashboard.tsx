import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { Task } from "../reducers/taskReducer";

const AdminDashboard: React.FC = () => {
  const [taskName, setTaskName] = useState<string>("");
  const tasks = useSelector((state: RootState) =>
    state.tasks.filter((task) => !task.completed)
  );
  const dispatch = useDispatch();

  const addTask = () => {
    if (taskName.trim()) {
      dispatch({ type: "ADD_TASK", payload: { name: taskName } });
      setTaskName("");
    }
  };

  const deleteTask = (id: number) => {
    dispatch({ type: "DELETE_TASK", payload: { id } });
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Admin Dashboard</h2>
      <div className="flex items-center gap-4 mb-6">
        <input
          type="text"
          placeholder="Task Name"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          className="p-2 border rounded-md shadow-sm focus:ring focus:ring-blue-300 flex-1"
        />
        <button
          onClick={addTask}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Add Task
        </button>
      </div>
      <ul className="bg-white shadow-md rounded-md divide-y">
        {tasks.map((task) => (
          <li key={task.id} className="flex items-center justify-between p-4">
            <span className="text-gray-700">{task.name}</span>
            <button
              onClick={() => deleteTask(task.id)}
              className="text-red-500 hover:text-red-700"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminDashboard;
