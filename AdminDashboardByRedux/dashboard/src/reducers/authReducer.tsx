// Define Auth State type
export interface AuthState {
  isAuthenticated: boolean;
  userRole: "admin" | "user" | null; // Can be 'admin', 'user', or null
}

// Define Action types
interface LoginAction {
  type: "LOGIN";
  payload: { role: "admin" | "user" };
}

interface LogoutAction {
  type: "LOGOUT";
}

type AuthAction = LoginAction | LogoutAction;

// Initial State
const initialState: AuthState = {
  isAuthenticated: false,
  userRole: null, // 'admin' or 'user'
};

// Reducer
const authReducer = (
  state: AuthState = initialState,
  action: AuthAction
): AuthState => {
  switch (action.type) {
    case "LOGIN":
      return {
        isAuthenticated: true,
        userRole: action.payload.role,
      };
    case "LOGOUT":
      return initialState;
    default:
      return state;
  }
};

export default authReducer;
