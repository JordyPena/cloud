import "../Results/Results.css";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Item from "../Item/Item";
const Results = ({ result, allResults }) => {
  const history = useHistory();

  const [products, setProducts] = useState([]);
  useEffect(() => {
    if (history.location.search === `?category=men's clothing`) {
      let newArray = allResults.filter((item) => {
        return item.category === `men's clothing`;
      });
      setProducts(newArray);
    } else if (history.location.search === `?category=women's clothing`) {
      let newArray = allResults.filter((item) => {
        return item.category === `women's clothing`;
      });
      setProducts(newArray);
    } else setProducts(result);
  }, [history, allResults, result]);

  return (
    <>
      {products.map((item, idx) => {
        return (
          <div key={idx}>
            <Item item={item} />
          </div>
        );
      })}
    </>
  );
};

export default Results;
