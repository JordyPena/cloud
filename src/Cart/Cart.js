import "../Cart/Cart.css";
import { useContext } from "react";
import { CartContext } from "../Context/cartContext";
import CartItem from "../Cart-item/Cart-item";
import CartHeader from "../Cart-header/Cart-header";

const Cart = () => {
  const { cart } = useContext(CartContext);

  return (
    <div>
      <CartHeader />
      {cart.map((item, idx) => {
        return (
          <div key={idx}>
            <CartItem item={item} />
          </div>
        );
      })}
    </div>
  );
};

export default Cart;
