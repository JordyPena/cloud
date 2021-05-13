import "../Landing/Landing.css";

const Landing = () => {

  return (
    <main className='landing-container'>
      <header>
        <p>Team Favorites</p>
      </header>
      <section>
        <p>Dope shirt</p>
        <div className='first-img-container'>
          <div className='first-img'></div>
        </div>
      </section>
      <section>
        <p>Womens White shirt</p>
        <div className='second-img-container'>
          <div className='second-img'></div>
        </div>
      </section>
      <section>
        <p>Womens Red shirt</p>
        <div className='third-img-container'>
          <div className='third-img'></div>
        </div>
      </section>
      <section>
        <p>Mens 1/4 shirt</p>
        <div className='fourth-img-container'>
          <div className='fourth-img'></div>
        </div>
      </section>
    </main>
  )
}

export default Landing;