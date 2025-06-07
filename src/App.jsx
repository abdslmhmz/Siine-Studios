import { useState } from 'react';
import './App.css';

function App() {

  const [zoomHome, setZoomHome] = useState(true);

  const [animateHome, setAnimateHome] = useState(false);

  const handleClick = () => {
    setZoomHome(!zoomHome);

    setTimeout(() => {
      setAnimateHome(true);

    }, 1500);
  };

  return (
    <div className="App">
      <div className={`Home ${animateHome ? 'Home-animateHome' : ''}`}>
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

          <button onClick={handleClick} class={`buttons ${zoomHome ? '' : 'buttons-zoom'} ${animateHome ? 'buttons-animateHome' : ''}`}>
            Start
            <img className='buttons-icon' src="play.svg" alt="play icon" />
          </button>

        </header>
        <section className={`section1 ${animateHome ? 'section1-animateHome' : ''}`}>
          <div class={`${animateHome ? 'dark-filter' : ''}`}></div>
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
            <button className="buttons services-action-button">
              Our Services
              <img className='buttons-icon' src="right-arrow.svg" alt="play icon" />
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}


export default App;
