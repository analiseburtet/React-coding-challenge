import React, { useState } from "react";

const productsData = [
  { id: 1, name: "Product 1", category: "Category A", price: 10.99 },
  { id: 2, name: "Product 2", category: "Category B", price: 15.99 },
  { id: 3, name: "Product 3", category: "Category A", price: 8.49 },
  { id: 4, name: "Product 4", category: "Category C", price: 12.49 },
];

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [cartItems, setCartItems] = useState([]);

  const filteredProducts =
    selectedCategory === "All"
      ? productsData
      : productsData.filter((product) => product.category === selectedCategory);

  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter((item) => item.id !== productId));
  };

  const cartTotal = cartItems.reduce().toFixed(2);

  return (
    <div>
      <h1>Product List</h1>
      <div>
        <label htmlFor="category">Filter by category:</label>
        <select
          id="category"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="All">All</option>
          <option value="Category A">Category A</option>
          <option value="Category B">Category B</option>
          <option value="Category C">Category C</option>
        </select>
      </div>
      <ul>
        {filteredProducts.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price.toFixed(2)}{" "}
            <button data-testid={`add-to-cart-${product.id}`}>
              Add to Cart
            </button>
          </li>
        ))}
      </ul>
      <h2>Shopping Cart</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price.toFixed(2)}{" "}
            <button onClick={() => removeFromCart(item.id)} data-testid={`remove-from-cart-${item.id}`}>
              Remove
            </button>
          </li>
        ))}
      </ul>
      <p>Total Value: ${cartTotal}</p>
    </div>
  );
};

export default App;
