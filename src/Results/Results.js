import "../Results/Results.css";

const Results = ({ result }) => {

  console.log('result in results', result)
    const {title, image, price, description} = result[0];
  console.log('getting title', title)
  // need to map result incase we have multiple
  // and then render
  const item = result.map((eachItem) => {
    return eachItem
  })

  console.log('mapped item', item)
  console.log('mapped item.title',item.title)
  return (
    <section className="results-wrapper">
      <div className="results-content">
        <div className="results-img-container">
          <img src={image} alt='item' className='img-sizing'/>
        </div>
        <div className="results-text-container">
          <p className="results-content-text">{title}</p>
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
      <div className="results-content">
        <div className="results-img-container"></div>
        <div className="results-text-container">
          <p className="results-content-text">Air jordan 1 centre</p>
          <p className="results-content-text">Court</p>
          <p className="results-content-price">$135</p>
        </div>
      </div>
    </section>
  );
};

export default Results;
