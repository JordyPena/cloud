import "./Searchbar/Searchbar.css";
import { Route, useHistory, Redirect } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
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
  const [allResults, setAllResults] = useState([]);
  const history = useHistory();
  const [result, setResult] = useState([]);
  // const [storageResults, setStorageResults] = useState([]);

  const { cart } = useContext(CartContext);

  // const itemsFromLocalStorage = JSON.parse(localStorage.getItem('cart'))
  
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setAllResults(data);
      });
  }, []);
 
  // setting storage to existing items in cart
  // useEffect(() => {
  //   localStorage.setItem('cart', JSON.stringify(cart))
  // }, [cart])

  //get id's of all items
  // save those id's
  // and fetch corresponding items
  // save to new cart
  // render new cart
  // useEffect(() => {
        
  //   if (itemsFromLocalStorage) {

  //     let idsFromStorage = itemsFromLocalStorage.map((item) => {
  //       return item.id
  //     })
  //    console.log('ids in storage', idsFromStorage)
  //     let result = allResults.filter((item) => {
  //       return idsFromStorage.includes(item.id)
  //     })
  //   console.log('result found', result)
  //   }
  // }, [itemsFromLocalStorage, allResults])
  
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
        render={() =>
          cart.length ? (
            <Cart />
          ) : (
            <Redirect to="/landingPage" />
          )
        }
      />

      <Route exact path="/about" component={About} />

      <Route
        exact
        path="/products"
        render={
          () => (
            // result.length ? (
            //take the prop out
            //need to create a component
            //that handles rendering all the filtered items
            //and import that into results
            <Results result={result} allResults={allResults} />
          )
          // ) : (
          //   <Redirect to="/landingPage" />
          // )
        }
      />

      <Route
        exact
        path="/summary"
        render={() => <Summary allResults={allResults} />}
      />

      <Route exact path="/cart" render={() => (cart.length ? <Total /> : <Redirect to="/landingPage"/>)} />

      <Route exact path="/checkout" render={() => (cart.length ? <Checkout /> : <Redirect to="/landingPage"/>)} />

      <Route exact path="/thanks" component={Thanks} />

      <Footer />
    </>
  );
};

export default App;
