import "../Cart/Cart.css";

const Cart = () => {
  return (
    <>
      <main className="cart-wrapper">
      <header className='cart-header'>
        <p>It's time to review your cart.</p>
      </header>
        <div className="cart-titles">
          <p>Quantity</p>
          <p>Product Name</p>
          <p>Charge</p>
        </div>
        <div className="cart-items">
          <p>1 item</p>
          <p>Dope Shoes</p>
          <p>$100.00</p>
        </div>
        <div className="cart-items">
          <p>1 item</p>
          <p>Dope Shoes</p>
          <p>$100.00</p>
        </div>
        <div className="cart-items">
          <p>1 item</p>
          <p>Dope Shoes</p>
          <p>$100.00</p>
        </div>
        <div className="cart-items">
          <p>1 item</p>
          <p>Dope Shoes</p>
          <p>$100.00</p>
        </div>
        <div className="cart-items">
          <p>1 item</p>
          <p>Dope Shoes</p>
          <p>$100.00</p>
        </div>
        <section className="cart-total">
          <p>Subtotal: $500.00</p>
          <p>Estimated Tax: $41.25</p>
          <p>Total: $541.25</p>
        </section>
        <section className="cart-button-container">
          <button className="shop-button-style">Shop More</button>
          <button className="checkout-button-style">Checkout</button>
        </section>
      </main>
    </>
  );
};

export default Cart;
