import "../Nav/Nav.css";
import { Link } from "react-router-dom";
import { AiFillCloud } from "react-icons/ai";
import { useState } from 'react';
const Nav = ({ searchSubmitted }) => {

  const [userInput, setUserInput] = useState("");

  const inputChange = (e) => {
    setUserInput(e.target.value);
  };

  const searchSubmit = (e) => {
    e.preventDefault();
    searchSubmitted(userInput)
  }

  return (
    <nav className="nav-wrapper">
      <div className="nav-container-left">
        <Link to="/" className="nav-header" data-testid="cloud-element">
          Cloud <AiFillCloud />
        </Link>
      </div>

      <div className="nav-container-right">
        <form className="form-searchbar" onSubmit={searchSubmit}>
          <input
            className="form-searchbar-input"
            type="text"
            value={userInput}
            name="search-bar"
            aria-label='search-bar'
            onChange={inputChange}
            data-testid="searchbar-input"
          />
        </form>
        <Link to="/cart" className="nav-content-right">
          Cart
        </Link>
        <Link to="about" className="nav-content-right">
          About Us
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
