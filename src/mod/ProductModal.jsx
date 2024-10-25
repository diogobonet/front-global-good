import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ProductModal({ isOpen, onClose, onSubmit, mode = 'create', product = {} }) {
  const [productData, setProductData] = useState({
    name: '',
    description: '',
    quantity: 0,
    unity_price: 0,
    isActive: true,
    category_id: '',
  });
  
  const [categories, setCategories] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const token = localStorage.getItem('token');

  useEffect(() => {
    if (isOpen) {
      fetchCategories(); // Busca as categorias ao abrir o modal
      if (mode === 'edit') {
        setProductData(product); // Preenche o modal com as informações do produto a ser editado
      }
    }
  }, [isOpen, mode, product]);

  const fetchCategories = async () => {
    try {
      const response = await axios.get('http://localhost:3001/categories', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setCategories(response.data); 
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData((prevData) => ({
      ...prevData,
      [name]: name === 'unity_price' || name === 'quantity' ? parseFloat(value) : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = mode === 'edit' ? `http://localhost:3001/products/${product.id}` : 'http://localhost:3001/products';
      const method = mode === 'edit' ? 'put' : 'post';

      const response = await axios({
        method,
        url,
        headers: { Authorization: `Bearer ${token}` },
        data: productData,
      });

      onSubmit(productData);
      onClose();
    } catch (error) {
      console.error(`Error ${mode === 'edit' ? 'updating' : 'registering'} product:`, error.response?.data || error.message);
    }
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:3001/products/${product.sku}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      onSubmit(); // Atualiza a lista de produtos
      onClose();
    } catch (error) {
      console.error('Error deleting product:', error.response?.data || error.message);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        {mode === 'delete' ? (
          <>
            <h2>Delete Product</h2>
            <p>Are you sure you want to delete this product?</p>
            <div className="buttons">
              <button className="buttonMain" onClick={handleDelete}>Confirm</button>
              <button className="buttonMain back" onClick={onClose}>Cancel</button>
            </div>
          </>
        ) : (
          <>
            <h2>{mode === 'edit' ? 'Edit' : 'Register'} Product</h2>
            <form onSubmit={handleSubmit}>
              <div className="input-label">
                <label>Name</label>
                <input type="text" name="name" value={productData.name} onChange={handleChange} required />
              </div>
              <div className="input-label">
                <label>Description</label>
                <textarea name="description" value={productData.description} onChange={handleChange} required />
              </div>
              <div className="input-label">
                <label>Quantity</label>
                <input type="number" name="quantity" value={productData.quantity} onChange={handleChange} required />
              </div>
              <div className="input-label">
                <label>Unity Price</label>
                <input type="number" name="unity_price" step="0.01" value={productData.unity_price} onChange={handleChange} required />
              </div>
              {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
              <div className="input-label">
                <label>Active</label>
                <input type="checkbox" name="isActive" checked={productData.isActive} onChange={(e) => setProductData((prevData) => ({ ...prevData, isActive: e.target.checked }))} />
              </div>
              <div className="input-label">
                <label>Category</label>
                <select name="category_id" value={productData.category_id} onChange={handleChange} required>
                  <option value="">Select a category</option>
                  {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="errors">
                <p></p>
              </div>
              <div className="buttons">
                <button type="submit" className="buttonMain">{mode === 'edit' ? 'Save' : 'Register'} Product</button>
                <button type="button" onClick={onClose} className="buttonMain back">Close</button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
}


export default ProductModal;
