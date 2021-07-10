import "../Cart-item/Cart-item.css"
import { useContext } from "react"
import { CartContext } from "../Context/cartContext"

const CartItem = ({ item }) => {

  

  const { removeFromCart } = useContext(CartContext);


  const removeItem = (id) => {
  
    removeFromCart(id)
  }

  return (
    <div className="cart-container">
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
          <p className='cart-p-top'>{item.title}</p>
          <p className='cart-p-top'>${item.price}</p>
        </div>
      </div>
      <div className="items-bottom">
        <p className='cart-p-bottom'>{item.category}</p>
        <p className='cart-p-bottom'>Size</p>
        <p className='cart-p-bottom'>{item.size}</p>
        <button className='remove-button' onClick={() => removeItem(item.id)}>Remove</button>
      </div>
    </main>
  </div>
  )
}

export default CartItem;