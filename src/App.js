import React, { useState } from 'react';
import Banner from './components/Banner';
import Cart from './components/Cart';
import ShoppingList from './components/ShoppingList';
import './styles/index.css';

function App() {
  const [cartCount, setCartCount] = useState(0);

  return (
    <div>
      <Banner />
      <div style={{ padding: '20px', maxWidth: '1000px', margin: '0 auto' }}>
        <Cart cartCount={cartCount} />
        <ShoppingList cartCount={cartCount} setCartCount={setCartCount} />
      </div>
    </div>
  );
}

export default App;