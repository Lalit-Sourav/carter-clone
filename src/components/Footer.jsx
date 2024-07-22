import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faPinterest, faTwitter, faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faSearch, faAngleRight} from '@fortawesome/free-solid-svg-icons';

import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-columns">
        <div className="footer-column">
          <h4>Support</h4>
          <ul>
            <li>Customer Service</li>
            <li>Accessibility Support</li>
            <li>Shipping</li>
            <li>Returns</li>
            <li>Gift Cards</li>
            <li>Today's Deals</li>
            <li>Size Chart</li>
            <li>My Account</li>
            <li>Carter's Credit Card</li>
            <li>Carter's Rewards™</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>About</h4>
          <ul>
            <li>Carter's Inc.</li>
            <li>Love Every Moment Blog</li>
            <li>Baby of the Month Contest</li>
            <li>All Store Locations</li>
            <li>International</li>
            <li>Join Carter's Affiliate Program</li>
            <li>Investor Relations</li>
            <li>Careers</li>
            <li>Raise the Future</li>
            <li>Carter's by DaVinci</li>
          </ul>
        </div>
        <div className="footer-column">
          <div className="subscribe-section">
            <h4>Stay in the know</h4>
            <div className="input-group">
              <input type="email" placeholder="Email Address" />
              <button><FontAwesomeIcon icon={faAngleRight} /></button>
            </div>
          </div>
          <div className="find-store-section">
            <h4>Find a store</h4>
            <div className="input-group">
              <input type="text" placeholder="Zip Code" />
              <button><FontAwesomeIcon icon={faSearch} /></button>
            </div>
          </div>
          <div className="social-icons">
            <FontAwesomeIcon icon={faFacebook} />
            <FontAwesomeIcon icon={faPinterest} />
            <FontAwesomeIcon icon={faTwitter} />
            <FontAwesomeIcon icon={faYoutube} />
            <FontAwesomeIcon icon={faInstagram} />
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024 Carter’s, Inc. All rights reserved.</p>
        <ul>
          <li>Google Ad Price Policy</li>
          <li>Terms and conditions</li>
          <li>Privacy Statements</li>
          <li>Do Not Sell My Personal Information</li>
          <li>Accessibility</li>
          <li>Coupon Policy</li>
          <li>Product Recalls</li>
          <li>UK Tax Strategy</li>
          <li>Site Map</li>
        </ul>
      </div>
      <div className="footer-trending">
        <p>Now Trending</p>
        <ul>
          <li>Big Sister Shirts</li>
          <li>Diaper Bags</li>
          <li>How to Buy the Right Size Shoes for Your Kids</li>
        </ul>
      </div>
      <div className="footer-disclaimer">
        <p>*EXCLUSIONS & DISCLAIMERS:</p>
        <p>UP TO 50% OFF: Savings based on MSRP. Excludes Select New Arrivals, LITTLE PLANET®, Sneak Peek, Treasure Box, Licensed Styles, SKIP HOP®, Doorbusters, Everyday Value, and Clearance. Select styles. Other exclusions may apply.</p>
        <p>BUY 1, GET 2 FREE DENIM: First item at MSRP. Additional items of equal or lesser value. Excludes select styles and clearance. Discount reflected in cart online.</p>
        <p>UP TO 70% OFF CLEARANCE: Savings based on MSRP.</p>
        <p>Customer Support ID: afafa60b9c</p>
      </div>
    </footer>
  );
}

export default Footer;
