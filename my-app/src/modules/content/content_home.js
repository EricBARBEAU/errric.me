
function Home() {
  return (
    <div id="MainPage" className="pt-page pt-page-1"> 
      <div className="InsideWrapper">
        <div className="introduction">
          <h1>Hi, I'm Eric</h1>
          <p>
            A <b>designer</b> 📟 , <b>photographer</b> 📷 and <b>brewer</b> 🍺
          </p>
          <p>
            currently based on planet <b>Earth</b>.
          </p>
          <button className="pt-trigger pt-trigger_home" data-animation="1" data-goto="-1">See my work</button>
        </div>
      </div>
      <div className="noise-bg inset-0" aria-hidden="true">
        <svg>
          <filter id='noise-bg-fx'>
            <feTurbulence baseFrequency="0.8" numOctaves="1" type="fractalNoise"></feTurbulence>
          </filter>
        </svg>
      </div>
    </div>
  );
}

export default Home;