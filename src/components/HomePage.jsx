// src/pages/HomePage.js
import React from 'react';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-page">
      <img src="https://images.ctfassets.net/621t91s0mnkp/1tNAg4BPzJflEEBHURE2di/284f780bb89a2fc9796f9a115e5c8411/car-071824-friendsandfamily-hero-x20off-50purchase-desktop.png?fm=webp&w=1366" alt="Banner" className="banner" />
      <div className="promotions">
        <div className="promotion">
          <img src="https://images.ctfassets.net/621t91s0mnkp/G5PDk3LgiiktdKhn9bAIJ/abedcd00f1e7577cc80dc409e53bbd1b/car-070824-summerdeals-EDV.jpg?fm=webp&w=1366" alt="Promo 1" />
          <p>Promotion 1</p>
        </div>
        <div className="promotion">
          <img src="https://images.ctfassets.net/621t91s0mnkp/3XuCc1aWOM8QR28JdZ7jAO/90e9c9c35e9db083c2fd34b5081e3f78/car-070824-summerdeals-clearance.jpg?fm=webp&w=1366" alt="Promo 2" />
          <p>Promotion 2</p>
        </div>
      </div>
      <h2>Featured Products</h2>
      <div className="featured-products">
        <div className="product">
          <img src="/images/product1.jpg" alt="Product 1" />
          <p>Product 1</p>
          <p>$10.00</p>
        </div>
        <div className="product">
          <img src="/images/product2.jpg" alt="Product 2" />
          <p>Product 2</p>
          <p>$15.00</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
