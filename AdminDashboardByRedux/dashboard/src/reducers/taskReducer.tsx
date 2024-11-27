// Define the Task type
export interface Task {
  id: number;
  name: string;
  completed: boolean;
}

// Define Action types
interface AddTaskAction {
  type: "ADD_TASK";
  payload: { name: string };
}

interface DeleteTaskAction {
  type: "DELETE_TASK";
  payload: { id: number };
}

interface ToggleTaskAction {
  type: "TOGGLE_TASK";
  payload: { id: number };
}

// Union type for Task actions
type TaskAction = AddTaskAction | DeleteTaskAction | ToggleTaskAction;

// Initial State
const initialState: Task[] = []; // Empty array of tasks

// Reducer
const taskReducer = (
  state: Task[] = initialState,
  action: TaskAction
): Task[] => {
  switch (action.type) {
    case "ADD_TASK":
      return [
        ...state,
        { id: Date.now(), name: action.payload.name, completed: false },
      ];
    case "DELETE_TASK":
      return state.filter((task) => task.id !== action.payload.id);
    case "TOGGLE_TASK":
      return state.map((task) =>
        task.id === action.payload.id
          ? { ...task, completed: !task.completed }
          : task
      );
    default:
      return state;
  }
};

export default taskReducer;
