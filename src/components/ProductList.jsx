import React, { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { StoreContext } from '../context/StroreContext';
import './ProductList.css';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortType, setSortType] = useState('');
  const { addToCart, addToWishlist } = useContext(StoreContext);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('http://localhost:3000/products');
      const data = await response.json();
      setProducts(data);
      setFilteredProducts(data);
    };

    fetchProducts();
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
      } else if (e.target.value === 'name-asc') {
        return a.name.localeCompare(b.name);
      } else if (e.target.value === 'name-desc') {
        return b.name.localeCompare(a.name);
      } else {
        return 0;
      }
    });
    setFilteredProducts(sorted);
  };

  const handleFilter = (category) => {
    const filtered = products.filter(product => product.category === category);
    setFilteredProducts(filtered);
  };

  const handleProductClick = (id) => {
    navigate(`/products/${id}`);
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
          <div className="product" key={product.id} onClick={() => handleProductClick(product.id)}>
            <img src={product.image} alt={product.name} />
            <p>{product.name}</p>
            <p>${product.price.toFixed(2)}</p>
            <button onClick={(e) => {e.stopPropagation(); addToCart(product)}} className="add-to-cart">Add to Cart</button>
            <button onClick={(e) => {e.stopPropagation(); addToWishlist(product)}} className="add-to-wishlist">Add to Wishlist</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
