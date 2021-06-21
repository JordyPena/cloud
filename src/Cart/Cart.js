import "../Cart/Cart.css";
import { useHistory } from 'react-router-dom';
import { useContext, useState, useEffect } from 'react';
import { CartContext } from "../Context/cartContext";
import CartItem from "../Cart-item/Cart-item";

const Cart = () => {

  const { cart } = useContext(CartContext)
  const [ itemCounter, setItemCounter ] = useState();

    //  //grab the query string using 
  //  const queryString = window.location.search;
  
  //  //we can parse the query string's parameters using
  //  const urlParams = new URLSearchParams(queryString);
  //  //call methods on the result
  //  console.log('urlParams', urlParams)
  //  // item.title
  //  const itemParam = urlParams.get('item')
  //  console.log('item', itemParam)
  //  //item size
  //  const sizeParam = urlParams.get('size')
  //  console.log('size', sizeParam)  
  console.log('cart amount of items', cart)

  // count here and pass to item

    for (let i = 0; cart.length < i; i++) {
      setItemCounter(i++)
    }
 

  return (
   <div>
     {cart.map((item, idx) => {
       return (
         <div key={idx}>

         <CartItem item={item} itemCounter={itemCounter}/>
         </div>
       )
     })}
   </div>
  );
};

export default Cart;
