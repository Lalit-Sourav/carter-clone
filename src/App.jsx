import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import AppNavbar from './components/Navbar';
import SignUp from './components/SignUp';
import ProductList from './components/ProductList';
import ProductDisplay from './components/ProductDisplay';
import Cart from './components/Cart';
import Wishlist from './components/Wishlist';
import Footer from './components/Footer';
import LogIn from './components/LogIn';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <AppNavbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path='/signup' element={<SignUp/>} />
          <Route path='/login' element={<LogIn/>} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/products/:id" element={<ProductDisplay />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<Wishlist />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
