import "../Home/Home.css";
import { useHistory } from 'react-router-dom';

const Home = () => {
  const history = useHistory();

  // on click take user to landingpage
  const enterSite = () => {
    history.push('/landingPage')
  }
  return (
    <main className="home-container">
      <header className="home-header-container">
        <div className="home-header">
          <h1 className="home-h1">Keep the Summer Vibe Alive</h1>
          <p>Explore our new arrivals</p>
          <button className='home-button-styles' onClick={() => enterSite()}>Dive Right In</button>
        </div>
      </header>
    </main>
  );
};

export default Home;
