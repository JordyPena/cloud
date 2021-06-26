import "../Checkout/Checkout.css";
import CartHeader from "../Cart-header/Cart-header";
import { useState, useEffect } from 'react';
import { FcCheckmark } from "react-icons/fc";
const Checkout = () => {

  const [ deliveryDataReceived, setDeliveryDateReceived ] = useState(false);
  const [ firstName, setFirstName ] = useState("");
  const [ lastName, setLastName ] = useState("");
  const [ address, setAddress ] = useState("");
  const [ email, setEmail ] = useState("");
  const [ phone, setPhone ] = useState("");

  const deliverySubmit = (e) => {
    e.preventDefault();
    if (deliveryDataReceived === false) {
      setDeliveryDateReceived(true)
    }
  }

  const deliveryInputs = (e) => {
    console.log('targeting', e.target.name)
    if (e.target.name === "firstName") {
      setFirstName(e.target.value)
    } else if (e.target.name === "lastName") {
      setLastName(e.target.value)
    } else if (e.target.name === "address") {
      setAddress(e.target.value)
    } else if (e.target.name === "email") {
      setEmail(e.target.value)
    } else setPhone(e.target.value)
  }

  useEffect(() => {
   if (deliveryDataReceived === true) {
    //set state to render green checkmark when we have data
   }
  }, [deliveryDataReceived])


  return (
    <section>
      <header><CartHeader /></header>

      <div className='checkout-container'>
        <div className='checkout-address'>
          <label className="delivery-label">{deliveryDataReceived === true ? <FcCheckmark /> : ""} 1. DELIVERY OPTIONS</label>
          {deliveryDataReceived === false ? 
            <form className='delivery-form' onSubmit={(e) => deliverySubmit(e)}>
            <input
              placeholder="First Name"
              className="address-inputs"
              value={firstName}
              name="firstName"
              onChange={(e) => deliveryInputs(e)}
              type="text"
            />
            <input
              placeholder="Last Name"
              className="address-inputs"
              value={lastName}
              name="lastName"
              onChange={(e) => deliveryInputs(e)}
              type="text"
            />
            <input
              placeholder="Address"
              className="address-inputs"
              value={address}
              name="address"
              onChange={(e) => deliveryInputs(e)}
              type="text"
            />
            <input
              placeholder="Email"
              className="address-inputs"
              value={email}
              name="email"
              onChange={(e) => deliveryInputs(e)}
              type="text"
            />
            <input
              placeholder="Phone Number"
              className="address-inputs"
              value={phone}
              name="phone"
              onChange={(e) => deliveryInputs(e)}
              type="number"
            />
            <button className="delivery-button">{`SAVE & CONTINUE`}</button>
          </form> : <div className="checkout-container">
              <div className="checkout-address">
                  <p>{firstName} {lastName}</p>
                  <p>{address}</p>
                  <p>{email}</p>
                  <p>{phone}</p>
                </div>
            </div>
          }
          
        </div>

        <div className='checkout-payment'>

        </div>
        <div className='checkout-review'>

        </div>
      </div>
    </section>
  )
}

export default Checkout;