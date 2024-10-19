import Table from 'react-bootstrap/Table';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductModal from '../components/ProductModal';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ProductRegister() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [products, setProducts] = useState([]); // Inicialize como array vazio
  const token = localStorage.getItem('token');

  // Função para abrir o modal de criação de produto
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  // Função para fechar o modal de criação de produto
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  // Função para buscar os produtos da API com autenticação
  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://localhost:3001/products', {
        headers: {
          Authorization: `Bearer ${token}`, // Envia o token no cabeçalho
        },
      });

      // Verifique se a resposta da API contém um array de produtos
      if (Array.isArray(response.data)) {
        setProducts(response.data); // Atualiza o estado com os produtos recebidos
      } else {
        console.error('API response is not an array:', response.data);
      }
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  // Chama fetchProducts quando o componente é montado
  useEffect(() => {
    fetchProducts();
  }, []);

  // Função chamada ao submeter um novo produto
  const handleSubmitProduct = (productData) => {
    console.log('Submitted product data:', productData);
    setIsModalOpen(false);
    fetchProducts(); // Atualiza a tabela após o cadastro de um novo produto
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
                  <td>${product.unity_price}</td> {/* Formata para 2 casas decimais */}
                  <td>{product.isActive ? 'Yes' : 'No'}</td>
                  <td><button>Edit</button></td>
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

      <Footer />
    </div>
  );
}

export default ProductRegister;
