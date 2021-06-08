import "../Landing/Landing.css";
import { useHistory } from "react-router-dom";

const Landing = ({ allResults }) => {
  const history = useHistory();

  const categorySelected = (e) => {
    history.push({
      pathname: "/products",
      search: `?category=${e.target.value}`,
    });
  };

  const itemSelected = (e) => {
    let number = parseInt(e.target.id);

    let newArray = allResults.filter((item) => {
      return item.id === number;
    });

    history.push({
      pathname: "/products",
      search: `?item=${newArray[0].title}`,
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
          aria-label="select-dropdown"
        >
          <option>Select a category</option>
          <option value="men's clothing">Men's clothing</option>
          <option value="women's clothing">Women's clothing</option>
        </select>
      </header>
      <section>
        <p>Mens Casual Slim Fit</p>
        <div className="first-img-container">
          <div
            data-testid="img-element"
            onClick={(e) => itemSelected(e)}
            className="first-img"
            id="4"
          ></div>
        </div>
      </section>
      <section>
        <p>Women's Solid Short Sleeve Boat Neck V</p>
        <div className="second-img-container">
          <div
            onClick={(e) => itemSelected(e)}
            className="second-img"
            id="18"
          ></div>
        </div>
      </section>
      <section>
        <p>Opna Women's Short Sleeve Moisture</p>
        <div className="third-img-container">
          <div
            onClick={(e) => itemSelected(e)}
            className="third-img"
            id="19"
          ></div>
        </div>
      </section>
      <section>
        <p>Mens Casual Premium Slim Fit T-Shirt</p>
        <div className="fourth-img-container">
          <div
            onClick={(e) => itemSelected(e)}
            className="fourth-img"
            id="2"
          ></div>
        </div>
      </section>
    </main>
  );
};

export default Landing;
