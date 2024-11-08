import React from 'react';
import axios from 'axios';

function DeleteModal({ isOpen, onClose, product, onDelete }) {
  const token = localStorage.getItem('token');

  const handleDelete = async () => {
    try {
      // Requisição DELETE para a API
      await axios.delete(`http://localhost:3001/products/${product.sku}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      
      // Chama a função onDelete passada como props para atualizar a lista de produtos
      onDelete();
      onClose(); // Fecha o modal após a deleção
    } catch (error) {
      console.error('Error deleting product:', error.response ? error.response.data : error.message);
    }
  };

  if (!isOpen) {
    return null; // Não renderiza o modal se ele não estiver aberto
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Delete Product</h2>
        <p>Are you sure you want to delete the product "{product.name}"?</p>
        
        <div className="buttons">
          <button className="buttonMain" onClick={handleDelete}>
            Confirm
          </button>
          <button className="buttonMain back" onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeleteModal;
