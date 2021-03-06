import "../Total/Total.css";
import { CartContext } from "../Context/cartContext";
import { useContext } from "react";
import { useHistory } from "react-router-dom";

const Total = () => {
  const { subTotal, tax, total } = useContext(CartContext);
  const history = useHistory();
 
  console.log('checking checking', subTotal)

  const continueShopping = () => {
    history.push('/landingPage')
  }

  const checkout = () => {
    history.push('/checkout')
  }

  return (
    <>
      <section className="cart-total">
        <p className="summary-title">Summary</p>
        <div className="cart-total-text">
          <p className="summary-totals">Subtotal: {subTotal}</p>
          <p className="summary-totals">Estimated Shipping: $ 8.00</p>
          <p className="summary-totals">Estimated Tax: $ {tax}</p>
          <p className="summary-totals">Total: $ {Number(total).toFixed(2)}</p>
        </div>
      </section>
      <section className="cart-button-container">
        <button className="shop-button-style" onClick={() => continueShopping()}>Shop More</button>
        <button className="checkout-button-style" onClick={() => checkout()}>Checkout</button>
      </section>
    </>
  );
};

export default Total;
