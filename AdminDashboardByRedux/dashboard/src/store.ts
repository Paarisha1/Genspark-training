import { createStore, combineReducers } from "redux";
import taskReducer from "./reducers/taskReducer.tsx";
import authReducer from "./reducers/authReducer.tsx";

// Combine reducers
const rootReducer = combineReducers({
  tasks: taskReducer,
  auth: authReducer, // Add authReducer if applicable
});

// Type for RootState
export type RootState = ReturnType<typeof rootReducer>;

// Create the Redux store
const store = createStore(rootReducer);

export default store;
