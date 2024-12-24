import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import NewOrder from './components/NewOrder';
import Pickups from './components/Pickups';
import './App.css';

function App() {
    return (
        <div>
            <Navbar />
            <Routes>
                {/* Default Route: Redirect root to New Order */}
                <Route path="/" element={<Navigate to="/NewOrder" />} />

                {/* Specific Routes */}
                <Route path="/NewOrder" element={<NewOrder />} />
                <Route path="/Pickups" element={<Pickups />} />

                {/* Optional: Handle unmatched routes */}
                <Route path="*" element={<Navigate to="/NewOrder" />} />
            </Routes>
        </div>
    );
}

export default App;




