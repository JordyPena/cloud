import '../Summary/Summary.css';

const Summary = () => {

  return (
    <main className='summary-wrapper'>
      <header className='summary-header-container'>
        <div className='summary-header-left'>
        <p className='summary-header-content'>Men's Shoe</p>
        <p className='summary-header-content'>Nike Air Force 1 '07</p>
        </div>

        <div className='summary-header-right'>
          <p>$90</p>
        </div>
      </header>
      <section className='summary-img-container'>
        <p className='summary-img'>Item img</p>
      </section>
      <section className='summary-alt-img-container'>
        <div className='summary-alt-content'>
        <p >Item other imgs</p>
        </div>
        <div className='summary-alt-content'>
        <p >Item other imgs</p>
        </div>
      </section>
      <section className='summary-sizes-wrapper'>
        <p>Select Size</p>
        <div className='summary-content-container'>
         <input type='radio' value='M 9 / W 10.5' id='radioApple' name='size' className='summary-size-style'/> 
         <label for='radioApple'>M 9 / W 10.5</label>
         <input type='radio' value='M 9 / W 10.5' id='radioApple' name='size' className='summary-size-style'/> 
         <label for='radioApple'>M 9 / W 10.5</label>
         <input type='radio' value='M 9 / W 10.5' id='radioApple' name='size' className='summary-size-style'/> 
         <label for='radioApple'>M 9 / W 10.5</label>
         <input type='radio' value='M 9 / W 10.5' id='radioApple' name='size' className='summary-size-style'/> 
         <label for='radioApple'>M 9 / W 10.5</label>
         <input type='radio' value='M 9 / W 10.5' id='radioApple' name='size' className='summary-size-style'/> 
         <label for='radioApple'>M 9 / W 10.5</label>
        
        </div>
      <button className='summary-button'>Add to Bag</button>
      </section>
    </main>
  )
}
export default Summary;