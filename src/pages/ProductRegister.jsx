import Table from 'react-bootstrap/Table';
import Header from '../components/Header';
import Footer from '../components/Footer'
import ProductModal from '../components/ProductModal'
import React, { useState } from 'react';


function ProductRegister() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmitProduct = (productData) => {
    console.log('Submitted product data:', productData);
    setIsModalOpen(false);
  };

  return (
    <div>
        <Header showLogin />
        <main class="product-register">
            <div class="header-product">
                <h1>Products</h1>
                <button className="buttonMain" type="button" onClick={handleOpenModal}>Create new product</button>
            </div>
            <Table class="table">
                    <thead>
                        <tr>
                            <th>SKU</th>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Quantity</th>
                            <th>Unit Price</th>
                            <th>Active</th>
                            <th>Category ID</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>SKU-DSKADASKDAS</td>
                            <td>Air-Fryer</td>
                            <td>New AirFryer</td>
                            <td>12</td>
                            <td>$20</td>
                            <td>True</td>
                            <td>5</td>
                            <td><button></button></td>
                        </tr>
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


