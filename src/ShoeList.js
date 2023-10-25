import React from 'react';
import ShoeItem from './ShoeItem';
import './ShoeList.css'; // Import the CSS file for styling

function ShoeList({ shoes, handleBuy }) {
  return (
    <div>
      <h2>Shoe Inventory</h2>
      <table className="shoe-table">
        <thead>
          <tr>
          <th>Brand Name</th>
            <th className="description-cell">Description</th>
            <th className='price'>Price</th>
            <th className='large'>Size L</th>
            <th className='medium'>Size M</th>
            <th className='small'>Size S</th>
          </tr>
        </thead>
        <tbody>
          {shoes.map((shoe, index) => (
            <ShoeItem key={index} shoe={shoe} handleBuy={handleBuy} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ShoeList;
