import Home from './Home/Home';
import Nav from './Nav/Nav';
import Footer from './Footer/Footer';
import { Route } from 'react-router-dom';
import Cart from './Cart/Cart';
import About from './About/About';
import Results from './Results/Results';
import Summary from './Summary/Summary';
function App() {
  return (
    <>
    <Nav />
    <Route
      exact
      path='/'
      component={Home}
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
      component={Results}
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
