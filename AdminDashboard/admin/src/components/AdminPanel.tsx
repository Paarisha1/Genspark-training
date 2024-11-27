import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { assignTask, deleteTask } from "../Slice/taskSlice.ts";
import { RootState, AppDispatch } from "../store.ts";

const AdminPanel: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const { users, tasks } = useSelector((state: RootState) => state.tasks);
  const [taskName, setTaskName] = useState("");
  const [selectedUser, setSelectedUser] = useState("");

  const handleAssignTask = () => {
    if (taskName && selectedUser) {
      dispatch(
        assignTask({
          taskName,
          userId: Number(selectedUser),
          time: new Date().toISOString(),
        })
      );
      setTaskName("");
      setSelectedUser("");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8 relative">
      {/* Task Count Box */}
      <div className="absolute top-4 right-4 bg-blue-500 text-white text-center px-4 py-2 rounded shadow-lg">
        <p className="text-sm font-semibold">Total Tasks</p>
        <p className="text-xl font-bold">{tasks.length}</p>
      </div>

      <h1 className="text-3xl font-bold text-gray-800 mb-6">Admin Panel</h1>
      <div className="bg-white p-6 shadow-md rounded-lg mb-8">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">
          Assign Task
        </h2>
        <div className="flex flex-col md:flex-row md:items-center gap-4">
          <input
            type="text"
            placeholder="Task Name"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
            className="w-full md:w-1/3 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <select
            value={selectedUser}
            onChange={(e) => setSelectedUser(e.target.value)}
            className="w-full md:w-1/3 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select User</option>
            {users.map((user) => (
              <option key={user.id} value={user.id}>
                {user.username}
              </option>
            ))}
          </select>
          <button
            onClick={handleAssignTask}
            className="px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 transition duration-200"
          >
            Assign Task
          </button>
        </div>
      </div>

      <div className="bg-white p-6 shadow-md rounded-lg">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">
          Statistics Table
        </h2>
        <table className="w-full border-collapse border border-gray-200 text-left">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 p-2">Task Name</th>
              <th className="border border-gray-300 p-2">Assigned To</th>
              <th className="border border-gray-300 p-2">Time</th>
              <th className="border border-gray-300 p-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task) => (
              <tr key={task.id} className="hover:bg-gray-100">
                <td className="border border-gray-300 p-2">{task.name}</td>
                <td className="border border-gray-300 p-2">
                  {users.find((u) => u.id === task.assignedTo)?.username}
                </td>
                <td className="border border-gray-300 p-2">
                  {new Date(task.time).toLocaleString()}
                </td>
                <td className="border border-gray-300 p-2">
                  <button
                    onClick={() => dispatch(deleteTask(task.id))}
                    className="px-4 py-1 bg-red-500 text-white font-semibold rounded hover:bg-red-600 transition duration-200"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminPanel;
