import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTaskStatus } from "../Slice/taskSlice.ts";
import { RootState, AppDispatch } from "../store";

interface UserPanelProps {
  userId: number;
}

const UserPanel: React.FC<UserPanelProps> = ({ userId }) => {
  const dispatch: AppDispatch = useDispatch();
  const user = useSelector((state: RootState) =>
    state.tasks.users.find((u) => u.id === userId)
  );

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        {user?.username}'s Tasks
      </h1>
      <ul className="space-y-4">
        {user?.tasks.map((task) => (
          <li
            key={task.id}
            className="flex items-center justify-between bg-white shadow-md rounded-lg p-4"
          >
            <span
              className={`text-lg font-medium ${
                task.completed ? "line-through text-gray-500" : "text-gray-800"
              }`}
            >
              {task.name}
            </span>
            <button
              onClick={() => dispatch(toggleTaskStatus(task.id))}
              className={`px-4 py-2 font-semibold rounded ${
                task.completed
                  ? "bg-red-500 text-white hover:bg-red-600"
                  : "bg-green-500 text-white hover:bg-green-600"
              } transition duration-200`}
            >
              {task.completed ? "Mark Incomplete" : "Mark Complete"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserPanel;
