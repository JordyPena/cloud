import '../Nav/Nav.css';
import { AiFillCloud } from 'react-icons/ai';
const Nav = () => {

  return (
    <navbar className='nav-container'>
      <div className='nav-content-left'>
        <p>About us</p>
        <p>Shop</p>
      </div>
      <h1 className='nav-header'>Cloud <AiFillCloud/></h1>
      <span className="cloud-img"></span>
      <div className='nav-content-right'>
        <p>Search</p>
        <p>Cart</p>
      </div>
    </navbar>
  )
}

export default Nav;