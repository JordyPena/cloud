import "../Summary-item/Sum-item.css";
import { useState } from 'react';
const SumItem = ({item}) => {

  const [currentImg, setCurrentImg] = useState(item.image);

  //figure out how to get
  //radio buttons to work
  //then save choice into state
  // once add to bad buttons clicked
  // pass the item added
  // and the size
  return (
    <main className='summary-wrapper'>
    <header className='summary-header-container'>
      <div className='summary-header-left'>
      <p className='summary-header-content'>{item.category}</p>
      <p className='summary-header-content'>{item.title}</p>
      </div>

      <div className='summary-header-right'>
        <p>${item.price}</p>
      </div>
    </header>
    <section className='summary-img-container'>
      <img src={currentImg} alt='item' className='summary-img'/>
    </section>
    <section className='summary-alt-img-container'>
      <div className='summary-alt-content'>
      <img src={item.image} alt='item' className='summary-alt-img' onClick={() => setCurrentImg(item.image)}/>
      </div>
      <div className='summary-alt-content'>
      <img src={item.image} alt='item' className='summary-alt-img' onClick={() => setCurrentImg(item.image)}/>
      </div>
    </section>
    <section className='summary-sizes-wrapper'>
      <p>Select Size</p>
      <div className='summary-content-container'>
       <input type='radio' value='XS' id='radioApple' name='size' className='summary-size-style'/> 
       <label for='radioApple'>XS</label>
       <input type='radio' value='S' id='radioApple' name='size' className='summary-size-style'/> 
       <label for='radioApple'>S</label>
       <input type='radio' value='M' id='radioApple' name='size' className='summary-size-style'/> 
       <label for='radioApple'>M</label>
       <input type='radio' value='L' id='radioApple' name='size' className='summary-size-style'/> 
       <label for='radioApple'>L</label>
       <input type='radio' value='XL' id='radioApple' name='size' className='summary-size-style'/> 
       <label for='radioApple'>XL</label>
      
      </div>
    <button className='summary-button'>Add to Bag</button>
    </section>
  </main>
  )
}

export default SumItem;