import React from 'react';
import '../styles/Cart.css';

function Cart({ cartCount }) {
  return (
    <div className="cart-container">
       Panier : <span>{cartCount}</span> article(s)
    </div>
  );
}

export default Cart;