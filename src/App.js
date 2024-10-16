// src/App.js
import React from 'react';
import './styles/global.scss'; 
import './styles/media.scss';
import './styles/_header.scss';
import './styles/_footer.scss';
import './styles/_tabs.scss';
import './styles/_searchinput.scss';
import './styles/_userdropdown.scss';
import Home from './pages/Home';
import Checkout from './pages/Checkout'; 
import NotFound from './pages/NotFound';
import LoginPage from './pages/LoginPage';
import ProductPage from './pages/ProductPage';
import RegisterPage from './pages/RegisterPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProtectedRoute from './auth/ProtectedRoute';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/notfound" element={<NotFound />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/checkout" element={<Checkout />} />

        <Route path="/login" element={<LoginPage />} />

        {/* Rotas protegidas usando o ProtectedRoute */}
        <Route 
          path="/" 
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          } 
        />
      </Routes>
    </Router>
  );
}

export default App;
