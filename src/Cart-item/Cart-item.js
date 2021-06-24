import "../Cart-item/Cart-item.css"
import { useContext } from "react"
import { CartContext } from "../Context/cartContext"

const CartItem = ({ item }) => {

  

  const { removeFromCart } = useContext(CartContext);


  const removeItem = (id) => {
  
    removeFromCart(id)
  }

  return (
    <>
    <main className="cart-wrapper">
      <div className="cart-items">
        <div className="cart-img-container">
          <img
            src={item.image}
            alt="clothing"
            className="cart-item-img"
          />
        </div>
        <div className="items-top">
          <p>{item.title}</p>
          <p>${item.price}</p>
        </div>
      </div>
      <div className="items-bottom">
        <p>{item.category}</p>
        <p>Size</p>
        <p>{item.size}</p>
        <button className='remove-button' onClick={() => removeItem(item.id)}>Remove</button>
      </div>
      <hr />
    </main>
  </>
  )
}

export default CartItem;