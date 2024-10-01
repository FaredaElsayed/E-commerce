import { createContext, useState, useEffect } from "react";
import all_product from "../Assets/all_product";
import React from "react";
// Create the context
export const ShopContext = createContext(null);

// Function to initialize the cart with default values or from local storage
const getDefaultCart = () => {
  const savedCart = localStorage.getItem("cartItems");
  if (savedCart) {
    return JSON.parse(savedCart); // If cart is stored in local storage, return it
  } else {
    let cart = {};
    for (let index = 0; index < all_product.length; index++) {
      cart[index] = 0; // Initialize each product with quantity 0
    }
    return cart;
  }
};

// Context provider component
const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  // Save cart to local storage whenever cartItems changes
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  // Function to add an item to the cart
  const addToCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: prev[itemId] + 1,
    }));
  };

  // Function to remove an item from the cart
  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: Math.max(prev[itemId] - 1, 0), // Prevent negative quantities
    }));
  };
  // Function to getTotalCartAmount
  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = all_product.find(
          (product) => product.id === Number(item)
        );
        totalAmount += itemInfo.new_price * cartItems[item];
      }
    }
    return totalAmount;
  };
  const getTotalItems = () => {
    let totalItems = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalItems += cartItems[item];
      }
    }
    return totalItems;
  };
  // Context value to provide
  const contextValue = {
    all_product,
    cartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    getTotalItems,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
