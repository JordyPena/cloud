import { CartContext } from "../Context/cartContext";
import { useContext, useEffect, useState } from "react";

const Total = () => {
  const { subTotal, tax, total } = useContext(CartContext);
 
  console.log('checking checking', subTotal)
  return (
    <>
      <section className="cart-total">
        <p className="summary-title">Summary</p>
        <div className="cart-total-text">
          <p>Subtotal: {subTotal}</p>
          <p>Estimated Shipping: $ 8.00</p>
          <p>Estimated Tax: $ {tax}</p>
          <p>Total: $ {total}</p>
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
