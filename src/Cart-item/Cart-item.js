import "../Cart-item/Cart-item.css"
import { useContext } from "react"
import { CartContext } from "../Context/cartContext"

const CartItem = ({ item, itemCounter, itemsTotal }) => {

  console.log('inside cart item', item)
  console.log('counter counter', itemCounter)

  const { removeFromCart } = useContext(CartContext);


  const removeItem = (id) => {
    console.log('working', id)
    removeFromCart(id)
  }

  return (
    <>
    <main className="cart-wrapper">
      <header className="cart-header">
        <p>Bag</p>
      </header>
      <div className="cart-titles">
        {itemCounter !== 0 && (
          <>
          <p className='cart-titles-text'>{itemCounter} Items</p>

          <p className='cart-titles-text'>Total: {itemsTotal}</p>
          </>
        )
        }
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
        <button className='remove-button' onClick={() => removeItem(item.item.id)}>Remove</button>
      </div>
      <hr />
    </main>
  </>
  )
}

export default CartItem;