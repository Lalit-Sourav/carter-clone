import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faHeart } from '@fortawesome/free-regular-svg-icons';
import { faBars, faBoxOpen, faMagnifyingGlass, faShoppingCart, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Sidebar from './Sidebar.jsx';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    const filtered = products.filter(product =>
      product.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('http://localhost:3000/products');
      const data = await response.json();
      setProducts(data);
      setFilteredProducts(data);
    };

    fetchProducts();
  }, []);
  
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    if (menuOpen) {
      setActiveMenu(null);
    }
  };

  const showSubMenu = (menu) => {
    setActiveMenu(menu);
  };

  const handleNavigation = (path) => {
    navigate(path);
    setMenuOpen(false); 
    setActiveMenu(null); 
  };

  const goBack = () => {
    setActiveMenu(null);
  };

  return (
    <nav className="navbar">
      <div className="navbar-top">
        <div className="add">
          <h5>Lorem</h5>
          <h5>Lorem</h5>
          <h5>Lorem</h5>
        </div>
        <div className="icons">
          <Link to='/signup'>
            <FontAwesomeIcon icon={faUser} />
          </Link>
          <Link to='/wishlist'>
            <FontAwesomeIcon icon={faHeart} />
          </Link>
          <FontAwesomeIcon icon={faBoxOpen} />
          <Link to='/cart'>
            <FontAwesomeIcon icon={faShoppingCart} />
          </Link>
        </div>
      </div>
      <div className={`navbar-bottom ${menuOpen ? 'open' : ''}`}>
        {!activeMenu && (
          <div className="main-menu">
            <div className="menu-icon" onClick={toggleMenu}>
              <FontAwesomeIcon icon={faBars} />
            </div>
            <div className="main-menu-logo">
              <div className="logo" onClick={() => handleNavigation('/')}>carter's</div>
            </div>
            <div className="main-menu-links">
              <div onClick={() => showSubMenu('baby')} className='main-menu-link'>Baby <span>PREEMIE - 24M</span></div>
              <div onClick={() => showSubMenu('toddler')} className='main-menu-link'>Toddler <span>2T - 5T</span></div>
              <div onClick={() => showSubMenu('kid')} className='main-menu-link'>Kid <span>4 - 14</span></div>
              <div onClick={() => showSubMenu('new')} className='main-menu-link'>New & Popular</div>
              <div onClick={() => showSubMenu('sale')} className='main-menu-link'>Sale</div>
            </div>
            <div className="search-container">
              <input type="text" placeholder="Find your product" onChange={handleSearch}/>
              <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon" />
            </div>
          </div>
        )}
        {activeMenu && (
          <div className="submenu">
            <div className="back-button" onClick={goBack}>Back</div>
            {activeMenu === 'baby' && (
              <div>
                <div className="submenu-left">
                  <div onClick={() => handleNavigation('/products')}>Baby Girl</div>
                  <div onClick={() => handleNavigation('/products')}>Baby Boy</div>
                  <div onClick={() => handleNavigation('/products')}>Baby Neutral</div>
                  <div onClick={() => handleNavigation('/products')}>Baby Clothes</div>
                  <div onClick={() => handleNavigation('/products')}>Baby Nursery & Gear</div>
                  <div onClick={() => handleNavigation('/products')}>Newborn Essentials</div>
                  <div onClick={() => handleNavigation('/products')}>Preemie Clothes</div>
                </div>
                <div className="submenu-mid"></div>
              </div>
            )}
            {activeMenu === 'toddler' && (
              <div>
                <div onClick={() => handleNavigation('/products')}>Toddler Girl</div>
                <div onClick={() => handleNavigation('/products')}>Toddler Boy</div>
                <div onClick={() => handleNavigation('/products')}>Toddler Neutral</div>
                <div onClick={() => handleNavigation('/products')}>Toddler Clothes</div>
                <div onClick={() => handleNavigation('/products')}>Toddler Nursery & Gear</div>
                <div onClick={() => handleNavigation('/products')}>Toddler Essentials</div>
                <div onClick={() => handleNavigation('/products')}>Toddler Shoes</div>
              </div>
            )}
            {activeMenu === 'kid' && (
              <div>
                <div onClick={() => handleNavigation('/products')}>Kid Girl</div>
                <div onClick={() => handleNavigation('/products')}>Kid Boy</div>
                <div onClick={() => handleNavigation('/products')}>Kid Neutral</div>
                <div onClick={() => handleNavigation('/products')}>Kid Clothes</div>
                <div onClick={() => handleNavigation('/products')}>Kid Nursery & Gear</div>
                <div onClick={() => handleNavigation('/products')}>Kid Essentials</div>
                <div onClick={() => handleNavigation('/products')}>Kid Shoes</div>
              </div>
            )}
            {activeMenu === 'new' && (
              <div>
                <div onClick={() => handleNavigation('/products')}>New Arrivals</div>
                <div onClick={() => handleNavigation('/products')}>Best Sellers</div>
                <div onClick={() => handleNavigation('/products')}>Top Rated</div>
                <div onClick={() => handleNavigation('/products')}>Trending</div>
              </div>
            )}
            {activeMenu === 'sale' && (
              <div>
                <div onClick={() => handleNavigation('/products')}>Clearance</div>
                <div onClick={() => handleNavigation('/products')}>Limited Time Offers</div>
                <div onClick={() => handleNavigation('/products')}>Discounts</div>
                <div onClick={() => handleNavigation('/products')}>Special Deals</div>
              </div>
            )}
          </div>
        )}
      </div>
      <Sidebar isOpen={menuOpen} onClose={toggleMenu} />
      <div className="bottom-section">
        <FontAwesomeIcon icon={faChevronLeft} />
        <span>NOW 40% OFF*: Back to school szn is here</span>
        <FontAwesomeIcon icon={faChevronRight} />
      </div>
    </nav>
  );
};

export default Navbar;
