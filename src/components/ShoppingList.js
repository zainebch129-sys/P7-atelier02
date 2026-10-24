import React from 'react';
import '../styles/ShoppingList.css';

const products = [
  { id: 1, name: 'Écouteurs Sans Fil', price: '250 DH', isSale: true, },
  { id: 2, name: 'Montre Connectée', price: '450 DH', isSale: false, },
  { id: 3, name: 'Souris Gamer', price: '150 DH', isSale: true, },
  { id: 4, name: 'Clavier Mécanique', price: '300 DH', isSale: false,  },
  { id: 5, name: 'Enceinte Bluetooth', price: '200 DH', isSale: false,  },
  { id: 6, name: 'Caméra HD', price: '600 DH', isSale: true, }
];

function ShoppingList({ cartCount, setCartCount }) {
  return (
    <div className="shopping-list-container">
      <ul className="product-grid">
        {products.map((product) => (
          <li key={product.id} className="product-card">
            {product.isSale && <span className="sale-badge">Solde</span>}
            <div className="product-emoji">{product.emoji}</div>
            <h3>{product.name}</h3>
            <p className="product-price">{product.price}</p>
            <button onClick={() => setCartCount(cartCount + 1)}>
              Ajouter au panier
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;