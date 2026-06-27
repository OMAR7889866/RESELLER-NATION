import React, { useState } from 'react';
import './App.css';
import ProductGrid from './components/ProductGrid';
import PaymentSection from './components/PaymentSection';

function App() {
  const [selectedShoe, setSelectedShoe] = useState(null);

  const shoes = [
    {
      id: 1,
      name: 'Balenciaga Tracks',
      price: '€40',
      description: 'Sizes 6 to 10. Comes with the box',
      category: 'Designer Shoes',
      image: 'https://via.placeholder.com/250x250?text=Balenciaga+Tracks'
    },
    {
      id: 2,
      name: 'Balenciaga Runners',
      price: '€40',
      description: 'Sizes 6 to 10. Comes with the box',
      category: 'Designer Shoes',
      image: 'https://via.placeholder.com/250x250?text=Balenciaga+Runners'
    },
    {
      id: 3,
      name: 'Bottega Orbit',
      price: '€40',
      description: 'Sizes 6 to 10. Comes with the box',
      category: 'Designer Shoes',
      image: 'https://via.placeholder.com/250x250?text=Bottega+Orbit'
    }
  ];

  const handleShoeClick = (shoe) => {
    setSelectedShoe(shoe);
    setTimeout(() => {
      const paymentSection = document.querySelector('.payment-section');
      if (paymentSection) {
        paymentSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div className="App">
      <ProductGrid shoes={shoes} onShoeClick={handleShoeClick} />
      {selectedShoe && <PaymentSection shoe={selectedShoe} />}
    </div>
  );
}

export default App;
