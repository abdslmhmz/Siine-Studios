import { useState } from 'react';
import './App.css';

function App() {

  const [zoomHome, setZoomHome] = useState(true);

  const [animateHome, setAnimateHome] = useState(false);

  const [animateServices, setAnimateServices] = useState(false);

  const handleClick = (func1, var1, func2) => {
    func1(!var1);

    if (func2) {
      setTimeout(() => {
        func2(true);

      }, 1500);
    }

  };

  return (
    <div className="App">
      <div className={`Home ${animateHome ? 'Home-animate' : ''} ${animateServices ? 'Services-animate' : ''}`}>
        <header className={`header ${animateHome ? 'header-animateHome' : ''}`}>
          <div className='placeholder'></div>
          <img src="/background.svg" alt="landscape"
            className={`background ${zoomHome ? 'background-zoom' : ''}`}
          />
          <img
            src="/foreground.svg"
            alt="trees"
            className={`foreground ${zoomHome ? 'foreground-zoom' : ''}`}
          />

          <img
            src="/moon.svg"
            alt="Moon"
            className={`moon ${zoomHome ? 'moon-zoom' : ''}`}
          />

          <img src="/logo.webp"
            alt="Studios Logo"
            className={`logo ${zoomHome ? 'logo-zoom' : ''} ${animateHome ? 'logo-animateHome' : ''}`}
            priority
          />

          <button onClick={() => handleClick(setZoomHome, zoomHome, setAnimateHome)} class={`buttons ${zoomHome ? '' : 'buttons-zoom'} ${animateHome ? 'buttons-animateHome' : ''}`}>
            Start
            <img className='buttons-icon' src="play.svg" alt="play icon" />
          </button>

        </header>
        <section className={`sectionHome ${animateHome ? 'sectionHome-animate' : ''}`}>
          <div className="action-text">
            <div className="action-text1">bring your</div>
            <div className="action-text2">VISION to LIFE</div>
            <div className="action-text3">Creative production studio offering full-service filming, video editing, pre and post-production solutions.</div>
          </div>
          <div className="action-buttons">
            <button className="buttons">
              Book a session
              <img className='buttons-icon' src="down-arrow.svg" alt="play icon" />
            </button>
            <button onClick={() => handleClick(setAnimateServices, animateServices)} className="buttons services-action-button">
              Our Services
              <img className='buttons-icon' src="right-arrow.svg" alt="play icon" />
            </button>
          </div>
        </section>
      </div>


      <div className={`Services ${animateServices ? 'Services-animate' : ''}`}>
        <section className="sections-services services-header">
          <div className="dark-filter"></div>
          <div className="services-header-text">
            <h1>Our Services</h1>
            <p>We offer a wide range of services to cater to all your production needs.</p>
          </div>
          <button onClick={() => handleClick(setAnimateServices, animateServices, setAnimateHome)} className="buttons services-header-button">
            Back to Home
            <img className='buttons-icon' src="left-arrow.svg" alt="play icon" />
          </button>
        </section>
        <section className="sections-services pre-production">
          <div className="dark-filter"></div>
          heeey
        </section>
        <section className="sections-services production">
          <div className="dark-filter"></div>
          yooou
        </section>
        <section className="sections-services post-production">
          <div className="dark-filter"></div>
          chaaaou
        </section>
      </div>
    </div>
  );
}


export default App;
