import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import  {Task} from "../reducers/taskReducer.ts"

const UserDashboard: React.FC = () => {
  const tasks = useSelector((state: RootState) => state.tasks);
  const dispatch = useDispatch();

  const toggleTaskCompletion = (id: number) => {
    dispatch({ type: "TOGGLE_TASK", payload: { id } });
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">User Dashboard</h2>
      <ul className="bg-white shadow-md rounded-md divide-y">
        {tasks.map((task) => (
          <li key={task.id} className="flex items-center justify-between p-4">
            <span
              className={`${
                task.completed ? "line-through text-gray-500" : "text-gray-700"
              }`}
            >
              {task.name}
            </span>
            <button
              onClick={() => toggleTaskCompletion(task.id)}
              className={`px-4 py-2 rounded-md ${
                task.completed
                  ? "bg-yellow-400 hover:bg-yellow-500"
                  : "bg-green-500 hover:bg-green-600"
              } text-white`}
            >
              {task.completed ? "Mark Incomplete" : "Mark Complete"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserDashboard;
