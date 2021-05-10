import '../Searchbar/Searchbar.css';
const Searchbar = () => {

  return (
    <form className='form-searchbar'>
      <input
        className='form-searchbar-input'
        type='text'
        value='Search'
        onChange='placeholder'
      />
    </form>
  )
}

export default Searchbar;