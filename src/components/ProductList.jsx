// src/components/ProductList.js
import React, { useEffect, useState, useContext } from 'react';
import './ProductList.css';
import { StoreContext } from '../context/StroreContext';
const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortType, setSortType] = useState('');
  const { addToCart, addToWishlist } = useContext(StoreContext);

  useEffect(() => {
    fetch('http://localhost:5000/products')
      .then(response => response.json())
      .then(data => {
        setProducts(data);
        setFilteredProducts(data);
      });
  }, []);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    const filtered = products.filter(product =>
      product.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  const handleSort = (e) => {
    setSortType(e.target.value);
    const sorted = [...filteredProducts].sort((a, b) => {
      if (e.target.value === 'price-asc') {
        return a.price - b.price;
      } else if (e.target.value === 'price-desc') {
        return b.price - a.price;
      } else {
        return a.name.localeCompare(b.name);
      }
    });
    setFilteredProducts(sorted);
  };

  const handleFilter = (category) => {
    const filtered = products.filter(product => product.category === category);
    setFilteredProducts(filtered);
  };

  return (
    <div className="product-list">
      <input 
        type="text" 
        placeholder="Search" 
        value={searchTerm}
        onChange={handleSearch}
        className="search-input"
      />
      <select onChange={handleSort} className="sort-select">
        <option value="">Sort by</option>
        <option value="price-asc">Price: Low to High</option>
        <option value="price-desc">Price: High to Low</option>
        <option value="name-asc">Name: A-Z</option>
        <option value="name-desc">Name: Z-A</option>
      </select>
      <button onClick={() => handleFilter('Baby')} className="filter-button">Baby</button>
      <button onClick={() => handleFilter('Toddler')} className="filter-button">Toddler</button>
      <div className="products">
        {filteredProducts.map(product => (
          <div className="product" key={product.id}>
            <img src={product.image} alt={product.name} />
            <p>{product.name}</p>
            <p>${product.price.toFixed(2)}</p>
            <button onClick={() => addToCart(product)} className="add-to-cart">Add to Cart</button>
            <button onClick={() => addToWishlist(product)} className="add-to-wishlist">Add to Wishlist</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
