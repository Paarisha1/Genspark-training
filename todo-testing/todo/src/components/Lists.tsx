import React from "react";
import { TaskItem } from "./Items";
import { Todo } from "../App";

export interface TaskListProps {
  todos: Todo[];
  onRemoveTask: (id: number) => void;
}

export const TaskList: React.FC<TaskListProps> = ({ todos, onRemoveTask }) => {
  return (
    <div className="mt-6">
      <h2 className="text-xl font-bold mb-4 text-pink-700">Tasks</h2>
      <ul className="space-y-2">
        {todos.length > 0 ? (
          todos.map((todo) => (
            <TaskItem key={todo.id} todo={todo} onRemoveTask={onRemoveTask} />
          ))
        ) : (
          <li className="text-pink-500 italic">No tasks available.</li>
        )}
      </ul>
    </div>
  );
};
