import { CartContext } from "../Context/cartContext";
import { useContext, useEffect, useState } from "react";
const Total = () => {
  const { cart } = useContext(CartContext);

  const [itemsTotal, setItemsTotal] = useState();
  const [shippingCost] = useState(8.0);
  const [tax, setTax] = useState();
  const [total, setTotal] = useState();
  console.log("in total component", cart);

  useEffect(() => {
    // loop each item in cart
    // add all the prices together
    let cartSum = 0;
    cart.map((item) => {
      return setItemsTotal((cartSum += item.item.price));
    });

    setTax((Number(itemsTotal) * 0.825).toFixed(2));

    setTotal(itemsTotal + shippingCost + parseInt(tax));
  }, [cart, itemsTotal, shippingCost, tax]);

  return (
    <>
      <section className="cart-total">
        <p className="summary-title">Summary</p>
        <div className="cart-total-text">
          <p>Subtotal: {itemsTotal}</p>
          <p>Estimated Shipping: $8.00</p>
          <p>Estimated Tax: ${tax}</p>
          <p>Total: ${total}</p>
        </div>
      </section>
      <section className="cart-button-container">
        <button className="shop-button-style">Shop More</button>
        <button className="checkout-button-style">Checkout</button>
      </section>
    </>
  );
};

export default Total;
