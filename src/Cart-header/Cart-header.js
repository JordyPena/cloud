import { useContext, useState, useEffect } from "react";
import { CartContext } from "../Context/cartContext";

const CartHeader = () => {
  const { cart } = useContext(CartContext);

  const [itemCounter] = useState(cart.length);
  const [itemsTotal, setItemsTotal] = useState(cart.length);

  useEffect(() => {
    // loop each item in cart
    // add all the prices together
    let cartSum = 0;
    cart.map((item) => {
      return setItemsTotal((cartSum += item.price));
    });
  }, [cart, itemsTotal]);

  return (
    <>
      <header className="cart-header">
        <p>Bag</p>
      </header>
      <div className="cart-titles">
        {itemCounter === 1 ? (
          <>
            <p className="cart-titles-text">{itemCounter} Item</p>

            <p className="cart-titles-text">Total: {itemsTotal}</p>
          </>
        ) : (
          <>
            <p className="cart-titles-text">{itemCounter} Items</p>

            <p className="cart-titles-text">Total: {itemsTotal}</p>
          </>
        )}
      </div>
    </>
  );
};

export default CartHeader;
