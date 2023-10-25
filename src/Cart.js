// Cart.js
import React from 'react';
import './Cart.css'
function Cart({ cart, handleIncrementQuantity, handleDecrementQuantity }) {
  // Calculate the total price
  const totalPrice = cart.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  return (
    <div className="cart-container">
      <h3>Your Cart</h3>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>
            <span>{item.brandName}</span>
            <span>Size: {item.size}</span>
            <span>Price: ${item.price}</span>
            <span>
              Quantity: {item.quantity}
              <button onClick={() => handleIncrementQuantity(item)}>+</button>
              <button onClick={() => handleDecrementQuantity(item)}>-</button>
            </span>
          </li>
        ))}
      </ul>
      <p>Total Price: ${totalPrice.toFixed(2)}</p>
      <div className="cart-buttons">
        <button className="buy-now-button">Buy Now</button>
        <button className="cancel-button">Cancel</button>
      </div>
    </div>
  );
}

export default Cart;
