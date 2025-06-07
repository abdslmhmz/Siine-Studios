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
            loading="lazy"
          />
          <img
            src="/foreground.svg"
            alt="trees"
            className={`foreground ${zoomHome ? 'foreground-zoom' : ''}`}
            loading="lazy"
          />

          <img
            src="/moon.svg"
            alt="Moon"
            className={`moon ${zoomHome ? 'moon-zoom' : ''}`}
            loading="lazy"
          />

          <img src="/logo.webp"
            alt="Studios Logo"
            className={`logo ${zoomHome ? 'logo-zoom' : ''} ${animateHome ? 'logo-animateHome' : ''}`}
            loading="lazy"
          />

          <button onClick={handleClick} className={`buttons ${zoomHome ? '' : 'buttons-zoom'} ${animateHome ? 'buttons-animateHome' : ''}`}>
            Start
            <img className='buttons-icon' src="play.svg" alt="play icon" loading="lazy" />
          </button>

        </header>
        <section className={`section1 ${animateHome ? 'section1-animateHome' : ''}`}>
          {/* Optimized Video Background */}
          <video 
            className="video-background"
            autoPlay 
            muted 
            loop 
            playsInline
            preload="metadata"
          >
            <source src="../public/studio-video-optimized.webm" type="video/webm" />
            <source src="../public/studio-video-optimized.mp4" type="video/mp4" />
            {/* Fallback for browsers that don't support video */}
            <img src="../public/studio-illustration-optimized.webp" alt="Studio background" />
          </video>
          
          <div className={`${animateHome ? 'dark-filter' : ''}`} />
          <div className="action-text">
            <div className="action-text1">bring your</div>
            <div className="action-text2">VISION to LIFE</div>
            <div className="action-text3">Creative production studio offering full-service filming, video editing, pre and post-production solutions.</div>
          </div>
          <div className="action-buttons">
            <button className="buttons">
              Book a session
              <img className='buttons-icon' src="down-arrow.svg" alt="down arrow icon" loading="lazy" />
            </button>
            <button className="buttons services-action-button">
              Our Services
              <img className='buttons-icon' src="right-arrow.svg" alt="right arrow icon" loading="lazy" />
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}


export default App;
