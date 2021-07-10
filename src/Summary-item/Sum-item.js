import "../Summary-item/Sum-item.css";
import { useState, useContext } from "react";
import { useHistory } from 'react-router-dom';
import { CartContext } from "../Context/cartContext";

const SumItem = ({ item }) => {
  const [currentImg, setCurrentImg] = useState(item.image);
  const [selectedSize, setSelectedSize] = useState("");
  const [notification, setNotification] = useState(false);
  const [currentItem] = useState(item);
  const history = useHistory();
  const { addToCart } = useContext(CartContext)

  const buttonSelected = (e) => {
    if (e.target.value) {
      setNotification(false)
    }
  
    setSelectedSize(e.target.value);
  };
  
  const addToBag = (e) => {
    e.preventDefault();
   
    if (selectedSize === "") {
      return setNotification(true);
    } else setNotification(false);

    addToCart(currentItem, selectedSize)
    history.push({
      pathname: "/cart",
    })
  };
  return (
    <main className="summary-wrapper">
      <header className="summary-header-container">
        <div className="summary-header-left">
          <p className="summary-header-content">{item.category}</p>
          <p className="summary-header-content">{item.title}</p>
        </div>

        <div className="summary-header-right">
          <p>${item.price}</p>
        </div>
      </header>
      <section className="summary-img-container">
        <img src={currentImg} alt="item" className="summary-img" />
      </section>
      <section className="summary-alt-img-container">
        <div className="summary-alt-content">
          <img
            src={item.image}
            alt="item"
            className="summary-alt-img"
            onClick={() => setCurrentImg(item.image)}
          />
        </div>
        <div className="summary-alt-content">
          <img
            src={item.image}
            alt="item"
            className="summary-alt-img"
            onClick={() => setCurrentImg(item.image)}
          />
        </div>
      </section>
      <section className="summary-sizes-wrapper">
        <p className='summary-selectSize-text'>Select Size</p>
        {notification === true && <p>Please Choose A Size</p>}
        

        <form
          className="summary-content-container"
          onSubmit={(e) => addToBag(e)}
        >
          {/* Xs */}
          <input type='radio' name='size' id='1' value="XS" checked={selectedSize === "XS"} onChange={(e) => buttonSelected(e)}/>
          <label for='1' className='lbl-radio'>
            <div className='display-box'>
              <div className='size'>XS</div>
            </div>
          </label>
          {/* S */}
          <input type='radio' name='size' id='2' value="S" checked={selectedSize === "S"} onChange={(e) => buttonSelected(e)}/>
          <label for='2' className='lbl-radio'>
            <div className='display-box'>
              <div className='size'>S</div>
            </div>
          </label>

          {/* M */}
          <input type='radio' name='size' id='3' value="M" checked={selectedSize === "M"} onChange={(e) => buttonSelected(e)}/>
          <label for='3' className='lbl-radio'>
            <div className='display-box'>
              <div className='size'>M</div>
            </div>
          </label>
         
          {/* L */}
          <input type='radio' name='size' id='4' value="L" checked={selectedSize === "L"} onChange={(e) => buttonSelected(e)}/>
          <label for='4' className='lbl-radio'>
            <div className='display-box'>
              <div className='size'>L</div>
            </div>
          </label>
         
          {/* XL */}
          <input type='radio' name='size' id='5' value="XL" checked={selectedSize === "XL"} onChange={(e) => buttonSelected(e)}/>
          <label for='5' className='lbl-radio'>
            <div className='display-box'>
              <div className='size'>XL</div>
            </div>
          </label>
         
         

          <button className="summary-button" type="submit">
            Add to Bag
          </button>
        </form>
      </section>
    </main>
  );
};

export default SumItem;
