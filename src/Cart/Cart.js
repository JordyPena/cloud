import "../Cart/Cart.css";
import { useHistory } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import { CartContext } from "../Context/cartContext";


const Cart = () => {

  const { cart } = useContext(CartContext)
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

  console.log('cart in context', cart)
  

  return (
    <>
      <main className="cart-wrapper">
        <header className="cart-header">
          <p>Bag</p>
        </header>
        <div className="cart-titles">
          <p className='cart-titles-text'>3 Items</p>
          <p className='cart-titles-text'>$270.00</p>
        </div>
        <div className="cart-items">
          <div className="cart-img-container"></div>
          <div className="items-top">
            <p>Nike Air Force 1 '07</p>
            <p>$90.00</p>
          </div>
        </div>
        <div className="items-bottom">
          <p>Men's Shoe</p>
          <p>Size</p>
          <p>M 12 / W 13.5</p>
          <button className='remove-button'>Remove</button>
        </div>
        <hr />
        <div className="cart-items">
          <div className="cart-img-container"></div>
          <div className="items-top">
            <p>Nike Air Force 1 '07</p>
            <p>$90.00</p>
          </div>
        </div>
        <div className="items-bottom">
          <p>Men's Shoe</p>
          <p>Size</p>
          <p>M 12 / W 13.5</p>
          <button className='remove-button'>Remove</button>
        </div>
        <hr />
        <div className="cart-items">
          <div className="cart-img-container"></div>
          <div className="items-top">
            <p>Nike Air Force 1 '07</p>
            <p>$90.00</p>
          </div>
        </div>
        <div className="items-bottom">
          <p>Men's Shoe</p>
          <p>Size</p>
          <p>M 12 / W 13.5</p>
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
  );
};

export default Cart;
