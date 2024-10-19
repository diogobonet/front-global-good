import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ProductModal({ isOpen, onClose, onSubmit }) {
  const [productData, setProductData] = useState({
    sku: '',
    name: '',
    description: '',
    quantity: 0,
    unity_price: 0,
    isActive: true,
    category_id: '',
  });

  const [categories, setCategories] = useState([]);
  const [errorMessage, setErrorMessage] = useState(''); // Estado para mensagens de erro
  const token = localStorage.getItem('token');

  // Gerar SKU automaticamente quando o modal abrir
  useEffect(() => {
    if (isOpen) {
      const generatedSku = `SKU-${Date.now()}`;
      setProductData((prevData) => ({
        ...prevData,
        sku: generatedSku,
      }));
      fetchCategories(); // Busca as categorias ao abrir o modal
    }
  }, [isOpen]);

  const fetchCategories = async () => {
    try {
      const response = await axios.get('http://localhost:3001/categories', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setCategories(response.data); // Armazena as categorias recebidas
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
  
    setProductData((prevData) => ({
      ...prevData,
      [name]: name === 'unity_price' || name === 'quantity' ? parseFloat(value) : value, // Converte para número
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(productData.unity_price)

    try {
      const response = await axios.post('http://localhost:3001/products', productData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log('Product registered:', response.data);
      onSubmit(productData);
      onClose(); // Fechar modal após submissão
    } catch (error) {
      console.error('Error registering product:', error.response ? error.response.data : error.message);
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
              onChange={handleChange}
              required
            />
          </div>

          {/* Exibe mensagem de erro se o preço unitário for inválido */}
          {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}

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
            <select
              name="category_id"
              value={productData.category_id}
              onChange={handleChange}
              required
            >
              <option value="">Select a category</option>
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
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
