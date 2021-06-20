import { createContext, useState } from 'react';

export const CartContext = createContext({});

 

export const CartProvider = ({children}) => {

  const [cart, setCart] = useState([]);

  const addToCart = (item, size) => {
    setCart([...cart, {item: item, size: size}])
  }

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id))
  }
  
  return <CartContext.Provider value={{cart, addToCart, removeFromCart}}>
    {children}
  </CartContext.Provider>
}