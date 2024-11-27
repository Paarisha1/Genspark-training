import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../store"; // Import RootState for type-safe state access

// Define Props for the ProtectedRoute component
interface ProtectedRouteProps {
  component: React.FC; // The component to render if the user has access
  role: "admin" | "user"; // The required role for the route
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  component: Component,
  role,
}) => {
  const { isAuthenticated, userRole } = useSelector(
    (state: RootState) => state.auth
  ); // Use RootState for type-safe state selection

  if (!isAuthenticated || userRole !== role) {
    return <Navigate to="/login" />;
  }

  return <Component />;
};

export default ProtectedRoute;
