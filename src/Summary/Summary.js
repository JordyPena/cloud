import '../Summary/Summary.css';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import SumItem from '../Summary-item/Sum-item';
const Summary = ({ allResults }) => {

  const history = useHistory();
  const [item, setItem] = useState([]);

  useEffect(() => {
  
    let historyId = parseInt(history.location.search.slice(6, 8))
   
    let newArray = allResults.filter((item) => {
      
      return item.id === historyId
    })
   setItem(newArray)
  }, [allResults, history])

  return (
    <>
   {item.map((item, idx) => {
     return (
       <div key={idx}>

         <SumItem item={item} />
       </div>
     )
   })}
   </>
  )
}
export default Summary;