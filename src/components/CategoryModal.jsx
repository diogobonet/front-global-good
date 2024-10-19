import React, { useState } from 'react';
import axios from 'axios';

function CategoryModal({ isOpen, onClose, onSubmit }) {
  const [categoryData, setCategoryData] = useState({
    name: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCategoryData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validação para verificar se o campo 'name' está preenchido
    if (!categoryData.name.trim()) {
      alert('Please enter a category name.'); // Alerta para o usuário
      return;
    }

    try {
      const response = await axios.post('http://localhost:3001/categories', categoryData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
          'Content-Type': 'application/json',
        },
      });
      onSubmit(response.data);

      // Fecha o modal
      onClose();

      // Atualiza a página
      window.location.reload();
    } catch (error) {
      console.error('Error creating category:', error.response ? error.response.data : error.message);
    }
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Register Category</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-label">
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={categoryData.name}
              onChange={handleChange}
              required
              maxLength="30"
            />
          </div>

          <div className="buttons">
            <button type="submit" className="buttonMain">
              Register Category
            </button>
            <button type="button" onClick={onClose} className="buttonMain back">
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CategoryModal;
