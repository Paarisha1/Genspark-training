import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const [role, setRole] = useState<string>("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = () => {
    if (role) {
      dispatch({ type: "LOGIN", payload: { role } });
      navigate(role === "admin" ? "/admin" : "/user");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-md shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-4">
          Login
        </h2>
        <div className="mb-4">
          <label
            htmlFor="role"
            className="block text-gray-700 font-medium mb-2"
          >
            Select Role
          </label>
          <select
            id="role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="w-full p-2 border rounded-md shadow-sm focus:ring focus:ring-blue-300"
          >
            <option value="">Choose Role</option>
            <option value="admin">Admin</option>
            <option value="user">User</option>
          </select>
        </div>
        <button
          onClick={handleLogin}
          className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
