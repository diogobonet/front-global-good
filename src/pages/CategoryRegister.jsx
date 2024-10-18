import Table from 'react-bootstrap/Table';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CategoryModal from '../components/CategoryModal';
import React, { useState, useEffect } from 'react';

function CategoryRegister() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [categories, setCategories] = useState([]);
  const [errorMessage, setErrorMessage] = useState(''); // Para armazenar mensagens de erro

  const fetchCategories = async () => {
    try {
      const token = localStorage.getItem('token'); // Certifique-se de que o token é válido
      console.log('Fetching categories with token:', token); // Log do token
  
      const response = await fetch('http://localhost:3001/categories', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      });
  
      console.log('Response status:', response.status); // Log do status da resposta
  
      // Verifica se a resposta não está ok
      if (!response.ok) {
        const errorText = await response.text(); // Obtém a resposta em texto
        setErrorMessage(`Error: ${response.status} - ${errorText}`); // Armazena a mensagem de erro
        throw new Error(`HTTP error! Status: ${response.status} - ${errorText}`);
      }
  
      // Tenta obter os dados da resposta
      const dataText = await response.text(); // Primeiro, obtenha a resposta como texto
      console.log('Response body:', dataText); // Log do corpo da resposta
  
      // Tente analisar o texto como JSON
      const data = JSON.parse(dataText); // Tente fazer o parse do JSON
      console.log('Fetched categories:', data); // Log dos dados recebidos
      setCategories(data);
    } catch (error) {
      console.error('Error fetching categories:', error);
      setErrorMessage('Error fetching categories.'); // Armazena a mensagem de erro genérica
    }
  };
  

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmitCategory = (categoryData) => {
    console.log('Submitted category data:', categoryData);
    setIsModalOpen(false);
  };

  return (
    <div>
      <Header showLogin />
      <main className="product-register">
        <div className="header-product">
          <h1>Categories</h1>
          <button className="buttonMain" type="button" onClick={handleOpenModal}>
            Create new category
          </button>
        </div>
        {errorMessage && <div className="error-message">{errorMessage}</div>} {/* Exibe a mensagem de erro */}
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
                  <button>Edit</button>
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
      />
      <Footer />
    </div>
  );
}

export default CategoryRegister;
