import "./Searchbar/Searchbar.css";
import { Route, useHistory, Redirect } from "react-router-dom";
import { useState, useContext } from "react";
import { CartContext } from "./Context/cartContext";
import Home from "./Home/Home";
import Nav from "./Nav/Nav";
import Footer from "./Footer/Footer";
import Landing from "./Landing/Landing";
import Cart from "./Cart/Cart";
import About from "./About/About";
import Results from "./Results/Results";
import Summary from "./Summary/Summary";
import Total from "./Total/Total";
import Checkout from "./Checkout/Checkout";
import Thanks from "./Thanks/Thanks";

const App = () => {
  const history = useHistory();
  const [result, setResult] = useState([]);
  const { cart, allResults } = useContext(CartContext);

  const searchSubmitted = (userInput) => {
    if (!userInput) {
      history.push("/landingPage");
      return;
    }
    const regex = new RegExp(userInput, "i");
    console.log(allResults);
    let newArray = allResults.filter((item) => {
      return item.title.match(regex);
    });
    console.log(newArray);
    setResult(newArray);
    history.push("/products");
  };

  return (
    <>
      <Nav searchSubmitted={searchSubmitted} />

      <Route exact path="/" component={Home} />

      <Route
        exact
        path="/landingPage"
        render={() => <Landing allResults={allResults} />}
      />

      <Route
        exact
        path="/cart"
        render={() => (cart.length ? <Cart /> : <Redirect to="/landingPage" />)}
      />

      <Route exact path="/about" component={About} />

      <Route
        exact
        path="/products"
        render={
          () => 
            <Results result={result} allResults={allResults} />
        }
      />

      <Route
        exact
        path="/summary"
        render={() => <Summary allResults={allResults} />}
      />

      <Route
        exact
        path="/cart"
        render={() =>
          cart.length ? <Total /> : <Redirect to="/landingPage" />
        }
      />

      <Route
        exact
        path="/checkout"
        render={() =>
          cart.length ? <Checkout /> : <Redirect to="/landingPage" />
        }
      />

      <Route exact path="/thanks" component={Thanks} />

      <Footer />
    </>
  );
};

export default App;
