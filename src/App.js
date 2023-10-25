// App.js
import React, { useState } from 'react';
import ShoeList from './ShoeList';
import ShoeForm from './ShoeForm';
import Cart from './Cart';
import './App.css';

function App() {
  const [shoes, setShoes] = useState([]);
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const addShoe = (shoe) => {
    setShoes([...shoes, shoe]);
  };

  const toggleCart = () => {
    setShowCart(!showCart);
  };

  const handleBuy = (shoe, size) => {
    const existingCartItem = cart.find(
      (item) => item.brandName === shoe.brandName && item.size === size
    );

    if (existingCartItem) {
      const updatedCart = cart.map((item) =>
        item === existingCartItem
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...shoe, size, quantity: 1 }]);
    }

    const updatedShoes = [...shoes];
    const selectedShoe = updatedShoes.find((item) => item === shoe);

    if (selectedShoe && selectedShoe.size[size] > 0) {
      selectedShoe.size[size]--;
      setShoes(updatedShoes);
    }
  };

  const handleIncrementQuantity = (item) => {
    setCart((prevCart) =>
      prevCart.map((cartItem) =>
        cartItem === item ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
      )
    );
  };

  const handleDecrementQuantity = (item) => {
    if (item.quantity > 1) {
      setCart((prevCart) =>
        prevCart.map((cartItem) =>
          cartItem === item ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem
        )
      );
    } else {
      setCart((prevCart) => prevCart.filter((cartItem) => cartItem !== item));
    }
  };

  return (
    <div>
      <div className="header">
        <h1>Shoe Inventory System</h1>
        <button className="cart-button" onClick={toggleCart}>
          Cart ({cart.length})
        </button>
      </div>

      <ShoeForm addShoe={addShoe} />
      <ShoeList shoes={shoes} handleBuy={handleBuy} />
      {showCart && (
        <Cart
          cart={cart}
          handleIncrementQuantity={handleIncrementQuantity}
          handleDecrementQuantity={handleDecrementQuantity}
        />
      )}
    </div>
  );
}

export default App;
