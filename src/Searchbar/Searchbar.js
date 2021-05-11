import '../Searchbar/Searchbar.css';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
const Searchbar = () => {
  const history = useHistory();
  const [userInput, setUserInput] = useState('');

  const searchSubmitted = (e) => {
    e.preventDefault();
  }

  const inputChange = (e) => {
   setUserInput(e.target.value)
  }
  return (
    <form className='form-searchbar' onSubmit={(e) => searchSubmitted()}>
      <input
        className='form-searchbar-input'
        type='text'
        value={userInput}
        name='searchBar'
        onChange={(e) => inputChange(e)}
      />
    </form>
  )
}

export default Searchbar;