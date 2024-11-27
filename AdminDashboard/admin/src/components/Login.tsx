import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../Slice/taskSlice.ts";
import { AppDispatch } from "../store";

interface LoginProps {
  onLoginSuccess: () => void;
}

const Login: React.FC<LoginProps> = ({ onLoginSuccess }) => {
  const dispatch: AppDispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    try {
      dispatch(login({ username, password }));
      onLoginSuccess();
    } catch {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-sm">
        <h1 className="text-2xl font-bold text-gray-800 mb-4 text-center">
          Login
        </h1>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          onClick={handleLogin}
          className="w-full py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 transition duration-200"
        >
          Login
        </button>
        {error && (
          <p className="mt-4 text-red-500 text-center font-medium">{error}</p>
        )}
      </div>
    </div>
  );
};

export default Login;
