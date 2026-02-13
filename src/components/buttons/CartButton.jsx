"use client"
import { CartContext } from '@/context/CartProvider';
import React, { use, useState } from 'react';

const CartButton = ({food}) => {

  
  const [inCart, setInCart] = useState(false)
  const {addToCart} = use(CartContext);
  const handleadd2Cart = () => {
    addToCart(food);
    setInCart(true)
  }



  // const handleadd2Cart = () => {
  //   setInCart(true)
  // }

  return (
    <button onClick={handleadd2Cart} disabled={inCart} className='flex-1 bg-blue-600 text-white py-2 rounded-lg disabled:bg-amber-50 disabled:text-gray-500'>
      {inCart ? "Added" : "Add To Cart"}
      
    </button>
  );
};

export default CartButton;