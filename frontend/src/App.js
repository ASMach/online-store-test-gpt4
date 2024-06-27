import React, { useState } from "react";
import Product from "./Product";
import Cart from "./Cart";

function App() {
  const [products] = useState([
    {
      id: 1,
      name: "Laptop",
      description: "High-performance laptop",
      price: 999.99,
    },
    {
      id: 2,
      name: "Smartphone",
      description: "Latest model smartphone",
      price: 699.99,
    },
  ]);
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product) => {
    const exist = cartItems.find((item) => item.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...exist, quantity: exist.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const handleRemoveFromCart = (product) => {
    const exist = cartItems.find((item) => item.id === product.id);
    if (exist.quantity === 1) {
      setCartItems(cartItems.filter((item) => item.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...exist, quantity: exist.quantity - 1 }
            : item
        )
      );
    }
  };

  const handleCheckout = () => {
    console.log("Proceeding to checkout", cartItems);
    // Here you could add further logic for the checkout process.
    setCartItems([]); // Clear the cart after checkout
  };

  return (
    <div>
      <h1>My Online Store</h1>
      <div>
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            onAddToCart={handleAddToCart}
          />
        ))}
      </div>
      <Cart
        cartItems={cartItems}
        onRemoveFromCart={handleRemoveFromCart}
        onCheckout={handleCheckout}
      />
    </div>
  );
}

export default App;
