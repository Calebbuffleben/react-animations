import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProtectedDashboard from './ProtectedDashboard';
import Login from './Login';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/dashboard" element={<ProtectedDashboard />} />
            </Routes>
        </Router>
    );
};

export default App;
