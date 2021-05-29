import "./Searchbar/Searchbar.css";
import { Route, useHistory, Redirect } from "react-router-dom";
import { useEffect, useState } from "react";
import Home from "./Home/Home";
import Nav from "./Nav/Nav";
import Footer from "./Footer/Footer";
import Landing from "./Landing/Landing";
import Cart from "./Cart/Cart";
import About from "./About/About";
import Results from "./Results/Results";
import Summary from "./Summary/Summary";

const App = () => {
  const [allResults, setAllResults] = useState([]);
  const history = useHistory();
  const [result, setResult] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        
        setAllResults(data);
      });
  }, []);
  
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
    history.push("/results");
  };

  return (
    <>
      <Nav   
        searchSubmitted={searchSubmitted}
      />

      <Route exact path="/" component={Home} />

      <Route exact path="/landingPage" component={Landing} />

      <Route exact path="/cart" component={Cart} />

      <Route exact path="/about" component={About} />

      <Route
        exact
        path="/results"
        render={() =>
          result.length ? (
            //take the prop out
            //need to create a component
            //that handles rendering all the filtered items
            //and import that into results
            <Results result={result} />
          ) : (
            <Redirect to="/landingPage" />
          )
        }
      />

      <Route exact path="/summary" component={Summary} />
      <Footer />
    </>
  );
}

export default App;
