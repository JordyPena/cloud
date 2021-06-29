import "../Checkout/Checkout.css";
import CartHeader from "../Cart-header/Cart-header";
import { useState, useEffect } from "react";
import { FcCheckmark } from "react-icons/fc";
const Checkout = () => {
  const [deliveryDataReceived, setDeliveryDateReceived] = useState(false);
  const [paymentDataReceived, setPaymentDataReceived] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
  const [securityCode, setSecurityCode] = useState("");
  const [displayPaymentForm, setDisplayPaymentForm] = useState(false);

  const deliverySubmit = (e) => {
    e.preventDefault();
    if (firstName === "") {
      return 
    } else if (lastName === "") {
      return
    } else if (address === "") {
      return
    } else if (email === "") {
      return
    }  else if (phone === "") {
      return
    } else if (deliveryDataReceived === false) {
      setDeliveryDateReceived(true);
    }
  };

  const paymentSubmit = (e) => {
    e.preventDefault();
    if (paymentDataReceived === false) {
      setPaymentDataReceived(true);
    }
  };

  //handling rendering payment form
  useEffect(() => {
    if (deliveryDataReceived === true) {
      setDisplayPaymentForm(true);
    } else if  (paymentDataReceived === false) {
      setDisplayPaymentForm(false);
    } else setDisplayPaymentForm(true)
  }, [deliveryDataReceived, paymentDataReceived]);

  // handling delivery inputs
  const deliveryInputs = (e) => {
    console.log("targeting", e.target.name);
    if (e.target.name === "firstName") {
      setFirstName(e.target.value);
    } else if (e.target.name === "lastName") {
      setLastName(e.target.value);
    } else if (e.target.name === "address") {
      setAddress(e.target.value);
    } else if (e.target.name === "email") {
      setEmail(e.target.value);
    } else setPhone(e.target.value);
  };

  // handling payment inputs
  const paymentInputs = (e) => {
    console.log("targeting", e.target.name);
    if (e.target.name === "cardNumber") {
      setCardNumber(e.target.value);
    } else if (e.target.name === "expirationDate") {
      setExpirationDate(e.target.value);
    } else setSecurityCode(e.target.value);
  };

  return (
    <section>
      <header>
        <CartHeader />
      </header>

      <div className="checkout-container">
        {/* address form */}
        <div className="checkout-address">
          <label className="delivery-label">
            {deliveryDataReceived === true ? <FcCheckmark /> : ""} 1. DELIVERY
            OPTIONS
          </label>
          {deliveryDataReceived === false ? (
            <form className="delivery-form" onSubmit={(e) => deliverySubmit(e)}>
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
            </form>
          ) : (
            <div className="checkout-container">
              <div className="checkout-address">
                <p>
                  {firstName} {lastName}
                </p>
                <p>{address}</p>
                <p>{email}</p>
                <p>{phone}</p>
              </div>
            </div>
          )}
        </div>
        {/* payment form */}
        <div className="checkout-payment">
          <label className="payment-label">
            {paymentDataReceived === true ? <FcCheckmark /> : ""} 2. PAYMENT
          </label>
          {displayPaymentForm === true ? (
            <form className="payment-form" onSubmit={(e) => paymentSubmit(e)}>
              <input
                placeholder="Card Number"
                className="payment-inputs"
                value={cardNumber}
                name="cardNumber"
                onChange={(e) => paymentInputs(e)}
                type="text"
              />
              <input
                placeholder="MM/YY"
                className="payment-inputs"
                value={expirationDate}
                name="expirationDate"
                onChange={(e) => paymentInputs(e)}
                type="number"
              />
              <input
                placeholder="XXX"
                className="payment-inputs"
                value={securityCode}
                name="securityCode"
                onChange={(e) => paymentInputs(e)}
                type="number"
              />
              <button className="payment-button">
                CONTINUE TO ORDER REVIEW
              </button>
            </form>
          ) : (
            <div className="checkout-container">
              <div className="checkout-payment">
                {paymentDataReceived === true && <>
                 <p>Payment Method</p>
                 <p>{expirationDate}</p>
                 <p>Billing Details</p>
                 <p>
                   {firstName} {lastName}
                 </p>
                 <p>{address}</p> </>
                }
               
              </div>
            </div>
          )}

          {/* how to get this to render when payment form submitted */}
          
        </div>

        <div className="checkout-review"></div>
      </div>
    </section>
  );
};

export default Checkout;
