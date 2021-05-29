import "../Results/Results.css";
import Item from '../Item/Item';
const Results = ({ result }) => {

  return (
    <>
      {result.map((item) => {
        return (
          <Item item={item} />
        )
      })}
    </>
  );
};

export default Results;
