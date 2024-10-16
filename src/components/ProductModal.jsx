import React, { useState, useEffect } from 'react';

function ProductModal({ isOpen, onClose, onSubmit }) {
  const [productData, setProductData] = useState({
    sku: '',
    name: '',
    description: '',
    quantity: 0,
    unity_price: 0.0,
    isActive: true,
    category: '',
  });

  // Gerar SKU automaticamente quando o modal abrir
  useEffect(() => {
    if (isOpen) {
      const generatedSku = `SKU-${Date.now()}`;
      setProductData((prevData) => ({
        ...prevData,
        sku: generatedSku,
      }));
    }
  }, [isOpen]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(productData);
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Register Product</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>SKU (Generated)</label>
            <input type="text" value={productData.sku} readOnly />
          </div>

          <div>
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={productData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label>Description</label>
            <textarea
              name="description"
              value={productData.description}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label>Quantity</label>
            <input
              type="number"
              name="quantity"
              value={productData.quantity}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label>Unity Price</label>
            <input
              type="number"
              name="unity_price"
              value={productData.unity_price}
              step="0.01"
              onChange={handleChange}
              required
            />
          </div>

          <div>
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

          <div>
            <label>Category</label>
            <input
              type="text"
              name="category"
              value={productData.category}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit">Register Product</button>
          <button type="button" onClick={onClose}>
            Close
          </button>
        </form>
      </div>
    </div>
  );
}

export default ProductModal;
