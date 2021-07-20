import { createContext, useState, useMemo, useEffect } from 'react';

export const CartContext = createContext({});

const parseLocalStorageCart = (allItems) => {
  // storeIds is an object
  
  const storeIds = JSON.parse(localStorage.getItem('cart'))
  console.log('ids in cart', storeIds)
  if (!storeIds) {
    return []
  }
  
  const foundItems = allItems.filter((item) => {
    return storeIds.includes(item.id)
  })
  console.log('items found', foundItems)
  return foundItems
}

export const CartProvider = ({children}) => {

  const [allResults, setAllResults] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
    .then((response) => response.json())
    .then((data) => {
      setAllResults(data)
      setCart(parseLocalStorageCart(data))
    });
  }, [])

  useEffect(() => {
    if (cart.length) 
    localStorage.setItem('cart', JSON.stringify(cart.map((item) => item.id)))
  }, [cart])

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