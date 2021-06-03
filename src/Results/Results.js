import "../Results/Results.css";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Item from "../Item/Item";
const Results = ({ result, allResults }) => {
  const history = useHistory();

  const [queryData, setQueryData] = useState([]);

  useEffect(() => {
    if (history.location.search === `?category=men's clothing`) {
      let newArray = allResults.filter((item) => {
        return item.category === `men's clothing`;
      });
      setQueryData(newArray);
    } else if (history.location.search === `?category=women's clothing`) {
      let newArray = allResults.filter((item) => {
        return item.category === `women's clothing`;
      });
      setQueryData(newArray);
    }
  }, [history, allResults]);

  return (
    <>
      {result.map((item, idx) => {
        return (
          <div key={idx}>
            <Item item={item} />
          </div>
        );
      })}

      {queryData.map((item, idx) => {
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
