import { createContext, useState, useMemo, useEffect } from "react";

export const CartContext = createContext({});

const parseLocalStorageCart = (allItems) => {
  const storeIdsAndSizes = JSON.parse(localStorage.getItem("cart"));

  if (!storeIdsAndSizes) {
    return [];
  }

  // 1st param reduce uses is the accumulator
  // 2nd param each individual item

  return allItems.reduce((groupedItems, item) => {
    //get itemSize using the id in the storeIdsAndSizes array
    // if the object in the array matches the id of the current item being looped
    // return size for matching id
    const { size } =
      storeIdsAndSizes.find(({ id }) => {
        return id === item.id;
      }) || {}; // if undefined, return empty object

    // if i don't find a matching id
    // don't add anything to groupedItems and return it
    if (!size) {
      return groupedItems;
    }

    // if we have a match add a new object to the groupedItems array with all properties item has
    // and add the size property to groupedItems and return it
    groupedItems.push({
      ...item,
      size,
    });

    return groupedItems;
  }, []);
};

export const CartProvider = ({ children }) => {
  const [allResults, setAllResults] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setAllResults(data);
        setCart(parseLocalStorageCart(data));
      });
  }, []);

  useEffect(() => {
    if (cart.length)
      //creating a key in localStorage and making an object wit property id and size of item
      localStorage.setItem(
        "cart",
        JSON.stringify(
          cart.map(({ id, size }) => {
            return { id, size };
          })
        )
      );
  }, [cart]);

  const addToCart = (item, size) => {
    setCart((prevCart) => [...prevCart, { ...item, size }]);
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const shipping = 8.0;

  const subTotal = useMemo(() => {
    let totalPrice = 0;

    for (const item of cart) {
      totalPrice += item.price;
    }
    return totalPrice || 0;
  }, [cart]);

  const tax = useMemo(() => {
    return Number((subTotal * 0.0825).toFixed(2)) || 0;
  }, [subTotal]);

  const total = useMemo(() => {
    return subTotal + tax + shipping || 0;
  }, [tax, subTotal]);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        subTotal,
        tax,
        total,
        shipping,
        allResults,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
