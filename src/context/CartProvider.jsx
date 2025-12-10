"use client";
import React, { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const add2Cart = (items) => {
    setCart([items, ...cart]);
  };
  const cartValue = {
    add2Cart,
    cart,
  };
  return <CartContext value={cartValue}>{children}</CartContext>;
};

export default CartProvider;
