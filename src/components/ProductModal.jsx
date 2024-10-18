import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ProductModal({ isOpen, onClose, onSubmit }) {
  const [productData, setProductData] = useState({
    sku: '',
    name: '',
    description: '',
    quantity: 0,
    unity_price: 0.0,
    isActive: true,
    category: '',
  });

  const token = localStorage.getItem('token');

  // Gerar SKU automaticamente quando o modal abrir
  useEffect(() => {
    if (isOpen) {
      const generatedSku = `SKU-${Date.now()}`;
      setProductData((prevData) => ({
        ...prevData,
        sku: generatedSku,
      }));
    }
  }, [isOpen]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // Substitua pela URL real da sua API
      const response = await axios.post('http://localhost:3001/products', productData, {
        headers: {
          Authorization: `Bearer ${token}`, // Incluindo o token no cabeçalho
        },
      });
      
      // Lida com resposta bem-sucedida
      console.log('Product registered:', response.data);
      onSubmit(productData);
      onClose(); // Fechar modal após submissão
    } catch (error) {
      // Lida com erros
      console.error('Error registering product:', error);
    }
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Register Product</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-label">
            <label>SKU (Generated)</label>
            <input type="text" value={productData.sku} readOnly />
          </div>

          <div className="input-label">
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={productData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-label">
            <label>Description</label>
            <textarea
              name="description"
              value={productData.description}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-label">
            <label>Quantity</label>
            <input
              type="number"
              name="quantity"
              value={productData.quantity}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-label">
            <label>Unity Price</label>
            <input
              type="number"
              name="unity_price"
              value={productData.unity_price}
              step="0.01"
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-label">
            <label>Active</label>
            <input
              type="checkbox"
              name="isActive"
              checked={productData.isActive}
              onChange={(e) =>
                setProductData((prevData) => ({
                  ...prevData,
                  isActive: e.target.checked,
                }))
              }
            />
          </div>

          <div className="input-label">
            <label>Category</label>
            <input
              type="text"
              name="category"
              value={productData.category}
              onChange={handleChange}
              required
            />
          </div>

          <div className="buttons">
            <button type="submit" className="buttonMain">Register Product</button>
            <button type="button" onClick={onClose} className="buttonMain back">
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ProductModal;
