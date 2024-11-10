import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

interface ProtectedRouteProps {
  children: JSX.Element;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { user } = useAuth(); // Replace `user` with your actual user state check

  if (!user) {
    // If user is not authenticated, redirect to the login page
    return <Navigate to="/login" replace />;
  }

  // If user is authenticated, render the child component
  return children;
};

export default ProtectedRoute;
