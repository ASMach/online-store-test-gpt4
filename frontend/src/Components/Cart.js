import React from "react";

function Cart({ cartItems, onRemoveFromCart, onCheckout }) {
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div style={{ border: "1px solid #ddd", padding: "10px", margin: "10px" }}>
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 && <div>Cart is empty</div>}
      {cartItems.map((item) => (
        <div key={item.id}>
          <h4>{item.name}</h4>
          <div>
            ${item.price.toFixed(2)} x {item.quantity}
          </div>
          <button onClick={() => onRemoveFromCart(item)}>Remove</button>
        </div>
      ))}
      {cartItems.length > 0 && (
        <>
          <h3>Total: ${totalPrice.toFixed(2)}</h3>
          <button onClick={onCheckout}>Checkout</button>
        </>
      )}
    </div>
  );
}
