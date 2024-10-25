import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CategoryModal from '../mod/CategoryModal';

function CategoryRegister() {
  const [categories, setCategories] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null); // Adicionar estado para a categoria selecionada

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch('http://localhost:3001/categories', {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch categories');
      }

      const contentType = response.headers.get('content-type');
      if (contentType && contentType.includes('application/json')) {
        const data = await response.json();
        setCategories(data);
      } else {
        const text = await response.text();
        throw new Error(`Unexpected response format: ${text}`);
      }
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  const handleOpenModal = (category = null) => {
    setSelectedCategory(category); // Definir a categoria selecionada ou null para criar
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedCategory(null); // Resetar a categoria selecionada
  };

  const handleSubmitCategory = (newCategory) => {
    // Lógica de criação ou atualização de categoria após o envio
    if (selectedCategory) {
      // Atualizar a categoria na lista local
      setCategories((prevCategories) =>
        prevCategories.map((category) =>
          category.id === newCategory.id ? newCategory : category
        )
      );
    } else {
      // Adicionar a nova categoria na lista local
      setCategories((prevCategories) => [...prevCategories, newCategory]);
    }
    setIsModalOpen(false);
  };

  return (
    <div>
      <Header showLogin />
      <main className="product-register">
        <div className="header-product">
          <h1>Categories</h1>
          <button className="buttonMain" type="button" onClick={() => handleOpenModal()}>
            Create new category
          </button>
        </div>
        {errorMessage && <div className="error-message">{errorMessage}</div>}
        <Table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Created At</th>
              <th>Updated At</th>
              <th>Deleted At</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((category) => (
              <tr key={category.id}>
                <td>{category.id}</td>
                <td>{category.name}</td>
                <td>{new Date(category.createdAt).toLocaleString()}</td>
                <td>{new Date(category.updatedAt).toLocaleString()}</td>
                <td>{category.deletedAt ? new Date(category.deletedAt).toLocaleString() : 'null'}</td>
                <td>
                  <button className='edit-button' onClick={() => handleOpenModal(category)}>Edit</button>
                  <button className='delete-button'>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </main>
      <CategoryModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSubmit={handleSubmitCategory}
        category={selectedCategory} // Passar a categoria selecionada
      />
      <Footer />
    </div>
  );
}

export default CategoryRegister;
