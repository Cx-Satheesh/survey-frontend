import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Remove BrowserRouter from here
import Login from '../views/auth/login';
import Home from '../views/home/Home';
import ProtectedRoute from './ProtectedRoute';
import Dashboard from '../views/dashboard/Dashboard';
import App from '../App';

const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />

      {/* Protected Route for authenticated users */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default AppRouter;
