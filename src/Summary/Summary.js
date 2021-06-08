import '../Summary/Summary.css';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import SumItem from '../Summary-item/Sum-item';
const Summary = ({ allResults }) => {

  const history = useHistory();
  const [item, setItem] = useState([]);

  useEffect(() => {
    console.log('history search', history.location.search)
    let historyId = parseInt(history.location.search.slice(6, 8))
    console.log('number ', historyId)
    let newArray = allResults.filter((item) => {
      console.log('item in filter', item)
      return item.id === historyId
    })
   setItem(newArray)
  }, [allResults, history])

  useEffect(() => {
    
    console.log('i got item', item)
  }, [item])
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