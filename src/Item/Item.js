import { useHistory } from "react-router-dom";

const Item = ({ item }) => {
  const history = useHistory();

  const itemClicked = (id) => {
    history.push({
      pathname: "/summary",
      search: `?item=${id}`,
    });
  };

  return (
    <section className="results-wrapper" data-testid="item-renders">
      <div className="results-content">
        <div className="results-img-container">
          <img
            src={item.image}
            alt="item"
            className="img-sizing"
            onClick={() => itemClicked(item.id)}
          />
        </div>
        <div className="results-text-container">
          <p className="results-content-text">{item.title}</p>
          <p className="results-content-price">${item.price}</p>
        </div>
      </div>
    </section>
  );
};

export default Item;
