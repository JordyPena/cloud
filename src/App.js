import Home from './Home/Home';
import Nav from './Nav/Nav';
import Footer from './Footer/Footer';
import { Route } from 'react-router-dom';
import Cart from './Cart/Cart';
import About from './About/About';
import Results from './Results/Results';
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
    <Footer/>
    </>
  );
}

export default App;
