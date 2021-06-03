import "../Landing/Landing.css";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

const Landing = () => {
  const history = useHistory();

  const categorySelected = (e) => {
    history.push({
      pathname: "/products",
      search: `?category=${e.target.value}`,
    });
  };

  return (
    <main className="landing-container">
      <header className="landing-header-container">
        <p>Team Favorites</p>
        <label>Search by category</label>
        <select
          className="select-category"
          onChange={(e) => categorySelected(e)}
        >
          <option>Select a category</option>
          <option value="men's clothing">Men's clothing</option>
          <option value="women's clothing">Women's clothing</option>
        </select>
        <label>Results limit</label>
        <select className="select-limit">
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="30">30</option>
        </select>
      </header>
      <section>
        <p>Dope shirt</p>
        <div className="first-img-container">
          <div className="first-img"></div>
        </div>
      </section>
      <section>
        <p>Womens White shirt</p>
        <div className="second-img-container">
          <div className="second-img"></div>
        </div>
      </section>
      <section>
        <p>Womens Red shirt</p>
        <div className="third-img-container">
          <div className="third-img"></div>
        </div>
      </section>
      <section>
        <p>Mens 1/4 shirt</p>
        <div className="fourth-img-container">
          <div className="fourth-img"></div>
        </div>
      </section>
    </main>
  );
};

export default Landing;
