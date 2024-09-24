// src/App.js
import React from 'react';
import './styles/global.scss'; 
import Home from './pages/Home'; // Importar a página
import NotFound from './pages/NotFound/NotFound'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/notfound" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
