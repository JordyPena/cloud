import Home from './Home/Home';
import Nav from './Nav/Nav';
import Footer from './Footer/Footer';
import { Route } from 'react-router-dom';
function App() {
  return (
    <>
    <Nav />
    <Route
      exact
      path='/'
      component={Home}
    />
    <Footer />
    </>
  );
}

export default App;
