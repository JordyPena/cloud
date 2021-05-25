import '../Nav/Nav.css';
import { Link } from 'react-router-dom';
import { AiFillCloud } from 'react-icons/ai';

const Nav = ({ allResults, searchbar }) => {
  return (
    <nav className='nav-wrapper'>
      <div className='nav-container-left'>
        <Link to='/' className='nav-header' data-testid='cloud-element'>
          Cloud <AiFillCloud />
        </Link>
      </div>

      <div className='nav-container-right'>
        {searchbar}
        <Link to='/cart' className='nav-content-right'>Cart</Link>   
        <Link to='about' className='nav-content-right'>About Us</Link>   
      </div>
    </nav>
  );
};

export default Nav;
