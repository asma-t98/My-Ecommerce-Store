
import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../CartContext'; 

const Cart = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);


  const totalPrice = cartItems.reduce((total, item) => {
    const price = parseFloat(item.price.replace('$', '')); 
    return total + price;
  }, 0);

  return (
    <div style={styles.cartContainer}>
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your shopping cart is empty!</p>
      ) : (
        <>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                <h4>{item.name}</h4>
                <p>{item.price}</p>
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </li>
            ))}
          </ul>
          <h3>Total Price: ${totalPrice.toFixed(2)}</h3> 
        </>
      )}
    </div>
  );
};

const styles = {
  cartContainer: {
    padding: '20px',
    border: '1px solid #ccc',
    marginTop: '20px',
  },
};

export default Cart;
