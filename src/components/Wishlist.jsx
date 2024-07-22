import React, { useContext } from 'react';
import { StoreContext } from '../context/StroreContext';
import './Wishlist.css';
import { Navbar } from '@nextui-org/react';

const Wishlist = () => {
  const { wishlist, removeFromWishlist } = useContext(StoreContext);

  return (
    <div className="wishlist">
      <Navbar></Navbar>
      <h2>Wishlist</h2>
      {wishlist.length === 0 ? (
        <p>Your wishlist is empty</p>
      ) : (
        wishlist.map(item => (
          <div key={item.id} className="wishlist-item">
            <img src={item.image} alt={item.name} />
            <p>{item.name}</p>
            <p>${item.price.toFixed(2)}</p>
            <button onClick={() => removeFromWishlist(item.id)}>Remove</button>
          </div>
        ))
      )}
    </div>
  );
};

export default Wishlist;
