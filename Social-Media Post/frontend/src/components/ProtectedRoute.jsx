import React from "react";
import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ children }) => { 
  const { user } = useAuth();
  return user ? children : <Navigate to="/login" replace />;
};


