import React, { useState } from 'react';

const SearchInput = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  // Atualiza o estado do searchTerm quando o usuário digitar algo
  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Função que será chamada quando o usuário clicar no botão de busca ou apertar Enter
  const handleSearch = () => {
    if (onSearch && searchTerm.trim() !== '') {
      onSearch(searchTerm);  // Aciona a função de busca passada como prop
    }
  };

  // Dispara a busca ao apertar "Enter"
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="search-input-container">
      <input
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
        placeholder="Search for products..."
        className="search-input"
      />
      <button onClick={handleSearch} className="search-button">
        <span className="material-symbols-outlined"> search </span>
      </button>
    </div>
  );
};

export default SearchInput;
