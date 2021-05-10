import '../Nav/Nav.css';
import { AiFillCloud } from 'react-icons/ai';
const Nav = () => {
  return (
    <navbar className='nav-wrapper'>
      <div className='nav-container-left'>
        <h1 className='nav-header'>
          Cloud <AiFillCloud />
        </h1>
        <span className='cloud-img'></span>
      </div>

      <div className='nav-container-right'>
        <p className='nav-content-right'>Search</p>   
        <p className='nav-content-right'>Cart</p>   
        <p className='nav-content-right'>About Us</p>   
      </div>
    </navbar>
  );
};

export default Nav;
