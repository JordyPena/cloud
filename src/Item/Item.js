
const Item = ({ item }) => {
  
  return (
    <section className="results-wrapper" data-testid='item-renders'>
    <div className="results-content">
      <div className="results-img-container">
        <img src={item.image} alt='item' className='img-sizing'/>
      </div>
      <div className="results-text-container">
        <p className="results-content-text" >{item.title}</p>
        <p className="results-content-price">${item.price}</p>
      </div>
    </div>
  </section>
  )
}

export default Item;