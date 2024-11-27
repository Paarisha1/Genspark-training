import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./Slice/taskSlice.ts";

export const store = configureStore({
  reducer: {
    tasks: taskReducer,
  },
});

// Types for TypeScript
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
