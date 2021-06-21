import "../Cart-item/Cart-item.css"


const CartItem = ({ item, itemCounter }) => {

  console.log('inside cart item', item)
  console.log('counter counter', itemCounter)
  return (
    <>
    <main className="cart-wrapper">
      <header className="cart-header">
        <p>Bag</p>
      </header>
      <div className="cart-titles">
        <p className='cart-titles-text'>{itemCounter} Items</p>
        <p className='cart-titles-text'>Total: </p>
      </div>
      <div className="cart-items">
        <div className="cart-img-container">
          <img
            src={item.item.image}
            alt="clothing"
            className="cart-item-img"
          />
        </div>
        <div className="items-top">
          <p>{item.item.title}</p>
          <p>${item.item.price}</p>
        </div>
      </div>
      <div className="items-bottom">
        <p>{item.item.category}</p>
        <p>Size</p>
        <p>{item.size}</p>
        <button className='remove-button'>Remove</button>
      </div>
      <hr />
      
      <section className="cart-total">
        <p className="summary-title">Summary</p>
        <div className="cart-total-text">
          <p>Subtotal: $270.00</p>
          <p>Estimated Shipping: $8.00</p>
          <p>Estimated Tax: $22.93</p>
          <p>Total: $292.93</p>
        </div>
      </section>
      <section className="cart-button-container">
        <button className="shop-button-style">Shop More</button>
        <button className="checkout-button-style">Checkout</button>
      </section>
    </main>
  </>
  )
}

export default CartItem;