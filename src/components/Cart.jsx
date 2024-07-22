import React, { useContext } from 'react';
import { StoreContext } from '../context/StroreContext';
import './Cart.css';


const Cart = () => {
  const { cart, removeFromCart } = useContext(StoreContext);

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      <div className='card'>
        <div className='logocard'>
          
        </div>
        <div className='descr'>
          <h3 className='heading'>open and save 30% Today with your first cater's clone credit card purchase</h3>
        </div>
        <div className='btn09'>
          <button className='applynow'>Apply Now</button>
        </div>
      </div>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        cart.map(item => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.name} />
            <p>{item.name}</p>
            <p>${item.price.toFixed(2)}</p>
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;