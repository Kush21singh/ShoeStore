import React, { useState } from 'react';
import './ShoeForm.css'; // Import the CSS file for styling

function ShoeForm({ addShoe }) {
  const [shoeData, setShoeData] = useState({
    brandName: '', // Initialize with an empty string
    description: '', // Initialize with an empty string
    price: '',
    size: {
      L: '',
      M: '',
      S: '',
    },
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    if (name.startsWith('size.')) {
      const sizeKey = name.substring(5);
      setShoeData({
        ...shoeData,
        size: {
          ...shoeData.size,
          [sizeKey]: value,
        },
      });
    } else {
      setShoeData({ ...shoeData, [name]: value });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addShoe(shoeData);
    setShoeData({
      brandName: '', // Reset to an empty string
      description: '', // Reset to an empty string
      price: '',
      size: {
        L: '',
        M: '',
        S: '',
      },
    });
  };

  const brandOptions = ['Adidas', 'Puma', 'Bata', 'Ubon', 'Lakhani', 'Mochi'];
  const descriptionOptions = ['Casual', 'Party', 'Sports', 'Running', 'Formal'];

  return (
    <div>
      <h2>Add a New Shoe</h2>
      <form onSubmit={handleSubmit} className="shoe-form">
        <div>
          <label htmlFor="brandName">Brand Name:</label>
          <select
            id="brandName"
            name="brandName"
            value={shoeData.brandName}
            onChange={handleInputChange}
          >
            <option value="">Select a Brand</option>
            {brandOptions.map((brand) => (
              <option key={brand} value={brand}>
                {brand}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <select
            id="description"
            name="description"
            value={shoeData.description}
            onChange={handleInputChange}
          >
            <option value="">Select a Description</option>
            {descriptionOptions.map((description) => (
              <option key={description} value={description}>
                {description}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="price">Price:</label>
          <input
            type="number"
            id="price"
            name="price"
            value={shoeData.price}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="size.L">Size L:</label>
          <input
            type="text"
            id="size.L"
            name="size.L"
            value={shoeData.size.L}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="size.M">Size M:</label>
          <input
            type="text"
            id="size.M"
            name="size.M"
            value={shoeData.size.M}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="size.S">Size S:</label>
          <input
            type="text"
            id="size.S"
            name="size.S"
            value={shoeData.size.S}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Add Shoe</button>
      </form>
    </div>
  );
}

export default ShoeForm;
