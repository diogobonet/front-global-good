// src/App.js
import React from 'react';
import './styles/global.scss'; 
import Home from './pages/Home'; 
import NotFound from './pages/NotFound';
import LoginPage from './pages/LoginPage'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/notfound" element={<NotFound />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App;
