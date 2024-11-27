import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminDashboard from "./components/AdminDashboard.tsx";
import UserDashboard from "./components/UserDashboard.tsx";
import Login from "./components/Login.tsx";

const App: React.FC = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/admin" element={<AdminDashboard />} />
      <Route path="/user" element={<UserDashboard />} />
    </Routes>
  </Router>
);

export default App;
