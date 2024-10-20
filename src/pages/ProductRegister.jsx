import Table from 'react-bootstrap/Table';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductModal from '../components/ProductModal';
import DeleteModal from '../components/DeleteModal'; // Importa o modal de delete
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ProductRegister() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false); // Estado para controlar o modal de deleção
  const [products, setProducts] = useState([]);
  const [selectedProductId, setSelectedProductId] = useState(null); // Estado para armazenar o ID do produto selecionado
  const token = localStorage.getItem('token');

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleOpenDeleteModal = (productId) => {
    setSelectedProductId(productId); // Define o produto a ser deletado
    setIsDeleteModalOpen(true);
  };

  const handleCloseDeleteModal = () => {
    setIsDeleteModalOpen(false);
    setSelectedProductId(null); // Limpa o produto selecionado
  };

  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://localhost:3001/products', {
        headers: {
          Authorization: `Bearer ${token}`, 
        },
      });

      if (Array.isArray(response.data)) {
        setProducts(response.data);
      } else {
        console.error('API response is not an array:', response.data);
      }
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []); // Corrigido para evitar loop infinito

  // Função chamada ao submeter um novo produto
  const handleSubmitProduct = (productData) => {
    console.log('Submitted product data:', productData);
    setIsModalOpen(false);
    fetchProducts();
  };

  // Função para deletar o produto
  const handleDeleteProduct = async () => {
    if (!selectedProductId) return;

    try {
      await axios.delete(`http://localhost:3001/products/${selectedProductId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      fetchProducts(); // Atualiza a lista de produtos após deletar
      handleCloseDeleteModal(); // Fecha o modal de confirmação
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  return (
    <div>
      <Header showLogin />
      <main className="product-register">
        <div className="header-product">
          <h1>Products</h1>
          <button className="buttonMain" type="button" onClick={handleOpenModal}>Create new product</button>
        </div>

        <Table className="table">
          <thead>
            <tr>
              <th>SKU</th>
              <th>Name</th>
              <th>Description</th>
              <th>Quantity</th>
              <th>Unit Price</th>
              <th>Active</th>
              <th>Category</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products.length > 0 ? (
              products.map((product) => (
                <tr key={product.sku}>
                  <td>{product.sku}</td>
                  <td>{product.name}</td>
                  <td>{product.description}</td>
                  <td>{product.quantity}</td>
                  <td>${product.unity_price}</td>
                  <td>{product.isActive ? 'Yes' : 'No'}</td>
                  <td>{product.category_id}</td>
                  <td>
                    <button className='edit-button'>Edit</button>
                    <button className='delete-button' onClick={() => handleOpenDeleteModal(product.id)}>Delete</button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="8">No products available</td>
              </tr>
            )}
          </tbody>
        </Table>
      </main>

      <ProductModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSubmit={handleSubmitProduct}
      />

      <DeleteModal
        isOpen={isDeleteModalOpen}
        onClose={handleCloseDeleteModal}
        onDelete={handleDeleteProduct} // Passa a função de deletar para o modal
      />

      <Footer />
    </div>
  );
}

export default ProductRegister;
