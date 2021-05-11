import Home from './Home/Home';
import Nav from './Nav/Nav';
import Footer from './Footer/Footer';
import { Route } from 'react-router-dom';
import Cart from './Cart/Cart';
import About from './About/About';

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
    <Footer/>
    </>
  );
}

export default App;
