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
import ProductRegister from './pages/ProductRegister';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProtectedRoute from './auth/ProtectedRoute';
import CategoryRegister from './pages/CategoryRegister';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} /> {/* Catch all */}
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/productregister" element={<ProductRegister />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/categoryregister" element={
          <ProtectedRoute allowedUserTypes={[2]}>
            <CategoryRegister />
          </ProtectedRoute>
        } />

        

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
