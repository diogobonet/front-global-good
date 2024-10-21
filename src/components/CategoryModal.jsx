import React, { useState, useEffect } from 'react';
import axios from 'axios';

function CategoryModal({ isOpen, onClose, onSubmit, category }) {
  const [categoryData, setCategoryData] = useState({
    name: '',
  });

  useEffect(() => {
    if (category) {
      // Preencher os campos do modal com os dados da categoria selecionada
      setCategoryData({
        name: category.name,
      });
    } else {
      // Resetar os dados se for uma nova categoria
      setCategoryData({
        name: '',
      });
    }
  }, [category]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCategoryData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!categoryData.name.trim()) {
      alert('Please enter a category name.');
      return;
    }

    try {
      const token = localStorage.getItem('token');
      if (category) {
        const response = await axios.patch(`http://localhost:3001/categories/${category.id}`, categoryData, {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });
        console.log("editado!")
        onSubmit(response.data);
      } else {
        // Se estiver criando, faz um POST
        const response = await axios.post('http://localhost:3001/categories', categoryData, {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });
        onSubmit(response.data);
      }

      onClose();
    } catch (error) {
      console.error('Error creating/updating category:', error.response ? error.response.data : error.message);
    }
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>{category ? 'Edit Category' : 'Register Category'}</h2>
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
              {category ? 'Update Category' : 'Register Category'}
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
