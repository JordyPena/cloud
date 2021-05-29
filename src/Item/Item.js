
const Item = ({ item }) => {
  
  return (
    <section className="results-wrapper">
    <div className="results-content">
      <div className="results-img-container">
        <img src={item.image} alt='item' className='img-sizing'/>
      </div>
      <div className="results-text-container">
        <p className="results-content-text">{item.title}</p>
        <p className="results-content-text">Court</p>
        <p className="results-content-price">${item.price}</p>
      </div>
    </div>
    <div className="results-content">
      <div className="results-img-container"></div>
      <div className="results-text-container">
        <p className="results-content-text">Air jordan 1 centre</p>
        <p className="results-content-text">Court</p>
        <p className="results-content-price">$135</p>
      </div>
    </div>
    <div className="results-content">
      <div className="results-img-container"></div>
      <div className="results-text-container">
        <p className="results-content-text">Air jordan 1 centre</p>
        <p className="results-content-text">Court</p>
        <p className="results-content-price">$135</p>
      </div>
    </div>
    <div className="results-content">
      <div className="results-img-container"></div>
      <div className="results-text-container">
        <p className="results-content-text">Air jordan 1 centre</p>
        <p className="results-content-text">Court</p>
        <p className="results-content-price">$135</p>
      </div>
    </div>
    <div className="results-content">
      <div className="results-img-container"></div>
      <div className="results-text-container">
        <p className="results-content-text">Air jordan 1 centre</p>
        <p className="results-content-text">Court</p>
        <p className="results-content-price">$135</p>
      </div>
    </div>
    <div className="results-content">
      <div className="results-img-container"></div>
      <div className="results-text-container">
        <p className="results-content-text">Air jordan 1 centre</p>
        <p className="results-content-text">Court</p>
        <p className="results-content-price">$135</p>
      </div>
    </div>
  </section>
  )
}

export default Item;