import "../Results/Results.css";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Item from "../Item/Item";

const Results = ({ result, allResults }) => {
  const history = useHistory();

  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (history.location.search === `?category=men's clothing`) {
      let mensClothing = allResults.filter((item) => {
        return item.category === `men's clothing`;
      });
      setProducts(mensClothing);
    } else if (history.location.search === `?category=women's clothing`) {
      let womensClothing = allResults.filter((item) => {
        return item.category === `women's clothing`;
      });
      setProducts(womensClothing);
    } else if (history.location.search === `?item=Mens Casual Slim Fit`) {
      let foundItem = allResults.find((item) => {
        return item.title === `Mens Casual Slim Fit`;
      });
      setProducts([foundItem]);
    } else if (
      history.location.search ===
      `?item=MBJ Women's Solid Short Sleeve Boat Neck V `
    ) {
      let foundItem = allResults.find((item) => {
        return item.title === `MBJ Women's Solid Short Sleeve Boat Neck V `;
      });
      setProducts([foundItem]);
    } else if (
      history.location.search === `?item=Opna Women's Short Sleeve Moisture`
    ) {
      let foundItem = allResults.find((item) => {
        return item.title === `Opna Women's Short Sleeve Moisture`;
      });
      setProducts([foundItem]);
    } else if (
      history.location.search === `?item=Mens Casual Premium Slim Fit T-Shirts `
    ) {
      let foundItem = allResults.find((item) => {
        return item.title === `Mens Casual Premium Slim Fit T-Shirts `;
      });
      setProducts([foundItem]);
    } else setProducts(result);
  }, [history, allResults, result]);

  return (
    <>
      {products.length === 0 ? (
        <p className="no-results">No results found...</p>
      ) : (
        ""
      )}

      {products.length >= 1 &&
        products.map((item, idx) => {
          return <Item item={item} key={idx} />;
        })}
    </>
  );
};

export default Results;
