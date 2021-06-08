import "../Summary-item/Sum-item.css";
import { useState } from "react";
const SumItem = ({ item }) => {
  const [currentImg, setCurrentImg] = useState(item.image);
  const [selectedSize, setSelectedSize] = useState("");
  //figure out how to get
  //radio buttons to work
  //then save choice into state
  // once add to bad buttons clicked
  // pass the item added
  // and the size

  const buttonSelected = (e) => {
    console.log("radio selected", e.target.value);
    setSelectedSize(e.target.value);
  };
  const addToBag = (e) => {
    e.preventDefault();
    console.log("button working", selectedSize);
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
        <p>Select Size</p>
        <p>Selected Size: {selectedSize}</p>

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
