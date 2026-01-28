import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './pages/dashboard';
import Homepage from './pages/Homepage';
import Login from './pages/Login';

import './App.css'; 

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Route 1: The Login Page (Default path '/') */}

        {/* Route 2: The Dashboard Page */}
        <Route path="/" element={<Homepage /> } />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        
        {/* Catch-all: Redirect unknown URLs to Login */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;