import Home from './Home/Home';
import Nav from './Nav/Nav';
import Footer from './Footer/Footer';
import { Route } from 'react-router-dom';
import Landing from './Landing/Landing';
import Cart from './Cart/Cart';
import About from './About/About';
import Results from './Results/Results';
import Summary from './Summary/Summary';
import { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import "./Searchbar/Searchbar.css";
function App() {

  const [allResults, setAllResults] = useState([]);
  const history = useHistory();
  const [userInput, setUserInput] = useState("");
  const [result, setResult] = useState();

  const regex = new RegExp(userInput, 'i')

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
    .then((response) => response.json())
    .then((data) => {
      setAllResults(data)
    });
  }, [])

  const searchbar = (
    <form className="form-searchbar" onSubmit={(e) => searchSubmitted(e)}>
      <input
        className="form-searchbar-input"
        type="text"
        value={userInput}
        name="searchBar"
        onChange={(e) => inputChange(e)}
      />
    </form>
  )

  const inputChange = (e) => {
    setUserInput(e.target.value);
  };

  const searchSubmitted = (e) => {
    e.preventDefault();
   console.log(allResults)
   let newArray = allResults.filter((item) => {
     return item.title.match(regex)
   })
   console.log(newArray)
   setResult(newArray)
   history.push('/results')
  };

  return (
    <>
    <Nav allResults={allResults} searchbar={searchbar}/>

    <Route
      exact
      path='/'
      component={Home}
    />

    <Route
      exact 
      path='/landingPage'
      component={Landing}
    />

    <Route
      exact
      path='/cart'
      component={Cart}
    />

    <Route
      exact
      path='/about'
      component={About}
    />

    <Route
      exact
      path='/results'
      render={() => <Results result={result} />}
    />

    <Route
      exact
      path='/summary'
      component={Summary}
    />
    <Footer/>
    </>
  );
}

export default App;
