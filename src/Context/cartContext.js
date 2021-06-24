import { createContext, useState, useMemo } from 'react';

export const CartContext = createContext({});

 

export const CartProvider = ({children}) => {

  const [cart, setCart] = useState([]);

  const addToCart = (item, size) => {
    setCart(prevCart => [...prevCart, { ...item, size} ])
  }

  const removeFromCart = (id) => {
    setCart(prevCart => prevCart.filter((item) => item.id !== id))
  }

  const shipping = 8.00;

  const subTotal = useMemo(() => {
    let totalPrice = 0;

    for(const item of cart) {
      totalPrice += item.price
    }
    return totalPrice || 0
  }, [cart])


  const tax = useMemo(() => {
    return Number((subTotal * 0.0825).toFixed(2)) || 0;
  }, [subTotal])

  const total = useMemo(() => {
    return subTotal + tax + shipping || 0;
  }, [tax, subTotal])

  return <CartContext.Provider value={{cart, addToCart, removeFromCart, subTotal, tax, total, shipping}}>
    {children}
  </CartContext.Provider>
}