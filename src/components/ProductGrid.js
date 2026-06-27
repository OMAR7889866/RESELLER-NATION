import React from 'react';
import './ProductGrid.css';

function ProductGrid({ shoes, onShoeClick }) {
  return (
    <div className="product-grid-container">
      <h1 className="store-title">RESELLER NATION</h1>
      <div className="product-grid">
        {shoes.map((shoe) => (
          <div
            key={shoe.id}
            className="product-card"
            onClick={() => onShoeClick(shoe)}
          >
            <div className="product-image">
              <img src={shoe.image} alt={shoe.name} />
            </div>
            <div className="product-info">
              <p className="product-category">{shoe.category}</p>
              <h3 className="product-name">{shoe.name}</h3>
              <p className="product-price">{shoe.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductGrid;
