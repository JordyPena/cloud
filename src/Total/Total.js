import { CartContext } from "../Context/cartContext";
import { useContext, useEffect, useState } from "react";

const Total = () => {
  const { subTotal, tax, total } = useContext(CartContext);

  // useEffect(() => {
  //   // loop each item in cart
  //   // add all the prices together
  //   // let cartSum = 0;
  //   // cart.map((item) => {
  //   //   return setItemsTotal((cartSum += item.item.price));
  //   // });

  //   // setTax((Number(itemsTotal) * 0.825).toFixed(2));

  //   // setTotal(itemsTotal + shippingCost + parseInt(tax));

  //   let price = 0;
  //   let tax = 0;
  //   const shipping = 8.0;

  //   for (let i = 0; i < cart.length; i++) {
  //     price += cart[i].item.price;
  //   }

  //   tax = (Number(price) * 0.0825).toFixed(2);

  //   const cartTotal = price + shipping + tax;

  //   console.log(cartTotal);
  // }, [cart, itemsTotal, shippingCost, tax]);
 
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
