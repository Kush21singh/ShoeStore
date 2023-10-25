import React, { useState } from 'react';
import './ShoeItem.css'; // Import the CSS file for styling

function ShoeItem({ shoe, handleBuy }) {
  const [clickCount, setClickCount] = useState(0);

  const handleAddToCart = (size) => {
    if (shoe.size[size] > 0) {
      handleBuy(shoe, size); // Pass the shoe and size to the handleBuy function
      setClickCount(clickCount + 1); // Increase the click count
    }
  };

  return (
    <tr>
      <td className="brand-name">{shoe.brandName}</td>
      <td className="description">{shoe.description}</td>
      <td className="sprice">{shoe.price}</td>
      <td className="slarge">
        <button
          className="buy-button"
          onClick={() => handleAddToCart('L')}
          disabled={shoe.size.L === 0}
        >
          {`Buy L(${shoe.size.L})`}
        </button>
      </td>
      <td className="smedium">
        <button
          className="buy-button"
          onClick={() => handleAddToCart('M')}
          disabled={shoe.size.M === 0}
        >
          {`Buy M(${shoe.size.M})`}
        </button>
      </td>
      <td className="ssmall">
        <button
          className="buy-button"
          onClick={() => handleAddToCart('S')}
          disabled={shoe.size.S === 0}
        >
          {`Buy S(${shoe.size.S})`}
        </button>
      </td>
    </tr>
  );
}

export default ShoeItem;
