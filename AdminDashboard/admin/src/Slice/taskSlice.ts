import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Task {
  id: number;
  name: string;
  assignedTo: number;
  completed: boolean;
  time: string;
}

interface User {
  id: number;
  username: string;
  password: string;
  tasks: Task[];
}

interface Admin {
  username: string;
  password: string;
}

interface TaskState {
  admin: Admin;
  users: User[];
  currentUser: Admin | User | null;
  isAdmin: boolean;
  tasks: Task[];
}

const initialState: TaskState = {
  admin: { username: "admin", password: "admin123" },
  users: [
    { id: 1, username: "user1", password: "user123", tasks: [] },
    { id: 2, username: "user2", password: "user123", tasks: [] },
    { id: 3, username: "user3", password: "user123", tasks: [] },
    { id: 4, username: "user4", password: "user123", tasks: [] },
    { id: 5, username: "user5", password: "user123", tasks: [] },
  ],
  currentUser: null,
  isAdmin: false,
  tasks: [],
};

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    login: (
      state,
      action: PayloadAction<{ username: string; password: string }>
    ) => {
      const { username, password } = action.payload;
      if (
        username === state.admin.username &&
        password === state.admin.password
      ) {
        state.currentUser = state.admin;
        state.isAdmin = true;
      } else {
        const user = state.users.find(
          (u) => u.username === username && u.password === password
        );
        if (user) {
          state.currentUser = user;
          state.isAdmin = false;
        } else {
          throw new Error("Invalid username or password");
        }
      }
    },
    logout: (state) => {
      state.currentUser = null;
      state.isAdmin = false;
    },
    assignTask: (
      state,
      action: PayloadAction<{ taskName: string; userId: number; time: string }>
    ) => {
      const { taskName, userId, time } = action.payload;
      const newTask: Task = {
        id: Date.now(),
        name: taskName,
        assignedTo: userId,
        completed: false,
        time,
      };
      state.tasks.push(newTask);
      const user = state.users.find((u) => u.id === userId);
      if (user) user.tasks.push(newTask);
    },
    toggleTaskStatus: (state, action: PayloadAction<number>) => {
      const taskId = action.payload;

      // Find and toggle the task's completion status
      const taskIndex = state.tasks.findIndex((t) => t.id === taskId);
      if (taskIndex !== -1) {
        const task = state.tasks[taskIndex];
        task.completed = !task.completed;

        // If the task is completed, remove it from the global tasks array
        if (task.completed) {
          state.tasks.splice(taskIndex, 1);

          // Remove the task from the specific user's tasks array
          state.users.forEach((user) => {
            user.tasks = user.tasks.filter((t) => t.id !== taskId);
          });
        }
      }
    },

    deleteTask: (state, action: PayloadAction<number>) => {
      const taskId = action.payload;
      state.tasks = state.tasks.filter((t) => t.id !== taskId);
      state.users.forEach((user) => {
        user.tasks = user.tasks.filter((t) => t.id !== taskId);
      });
    },
  },
});

export const { login, logout, assignTask, toggleTaskStatus, deleteTask } =
  taskSlice.actions;
export default taskSlice.reducer;
