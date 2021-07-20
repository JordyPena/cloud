import "../Results/Results.css";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Item from "../Item/Item";

const Results = ({ result, allResults }) => {
  const history = useHistory();

  const [products, setProducts] = useState([]);
  const [item, setItem] = useState([]);

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
    } else if (history.location.search === `?item=Mens Casual Slim Fit`) {
      let newArray = allResults.filter((item) => {
        return item.title === `Mens Casual Slim Fit`;
      });
      setItem(newArray);
    } else if (
      history.location.search ===
      `?item=MBJ Women's Solid Short Sleeve Boat Neck V `
    ) {
      let newArray = allResults.filter((item) => {
        return item.title === `MBJ Women's Solid Short Sleeve Boat Neck V `;
      });
      setItem(newArray);
    } else if (
      history.location.search === `?item=Opna Women's Short Sleeve Moisture`
    ) {
      let newArray = allResults.filter((item) => {
        return item.title === `Opna Women's Short Sleeve Moisture`;
      });
      setItem(newArray);
    } else if (
      history.location.search === `?item=Mens Casual Premium Slim Fit T-Shirts `
    ) {
      let newArray = allResults.filter((item) => {
        return item.title === `Mens Casual Premium Slim Fit T-Shirts `;
      });
      setItem(newArray);
    } else setProducts(result);
  }, [history, allResults, result]);

  return (
    <>
      {products.length === 0 && <p className='no-results'>No results found...</p>}
      {products.length >= 1
        ? products.map((item, idx) => {
            return (
              <div key={idx}>
                <Item item={item} />
              </div>
            );
          })
        : item.map((item, idx) => {
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
