import { useState } from 'react';
import './App.css';

function App() {

  const [active, setActive] = useState(true);

  const [animate, setAnimate] = useState(false);

  const handleClick = () => {
    setActive(!active);

    setTimeout(() => {
      setAnimate(true);
      
    }, 1500);
  };

  return (
    <div className="App">
      <div className={`wrapper ${animate ? 'wrapper-animate' : ''}`}>
        <header className={`header ${animate ? 'header-animate' : ''}`}>
          <div className='placeholder'></div>
          <img src="/background.svg" alt="landscape"
            className={`background ${active ? 'background-zoom' : ''}`}
          />
          <img
            src="/foreground.svg"
            alt="trees"
            className={`foreground ${active ? 'foreground-zoom' : ''}`}
          />

          <img
            src="/moon.svg"
            alt="Moon"
            className={`moon ${active ? 'moon-zoom' : ''}`}
          />

          <img src="/logo.webp"
            alt="Studios Logo"
            className={`logo ${active ? 'logo-zoom' : ''} ${animate ? 'logo-animate' : ''}`}
            priority
          />

          <input onClick={handleClick} type="checkbox" id="checkbox" />
          <label for="checkbox" class={`switch ${active ? '' : 'switch-zoom'} ${animate ? 'switch-animate' : ''}`}>
            Start
            <svg
              class="slider"
              viewBox="0 0 512 512"
              height="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V256c0 17.7 14.3 32 32 32s32-14.3 32-32V32zM143.5 120.6c13.6-11.3 15.4-31.5 4.1-45.1s-31.5-15.4-45.1-4.1C49.7 115.4 16 181.8 16 256c0 132.5 107.5 240 240 240s240-107.5 240-240c0-74.2-33.8-140.6-86.6-184.6c-13.6-11.3-33.8-9.4-45.1 4.1s-9.4 33.8 4.1 45.1c38.9 32.3 63.5 81 63.5 135.4c0 97.2-78.8 176-176 176s-176-78.8-176-176c0-54.4 24.7-103.1 63.5-135.4z"
              ></path>
            </svg>
          </label>

        </header>
        <section className={`section1 ${animate ? 'section1-animate' : ''}`}>
          <div className="action-text">
            <div className="action-text1">bring your</div>
            <div className="action-text2">VISION to LIFE</div>
            <div className="action-text3">Creative production studio offering full-service filming, video editing, pre and post-production solutions.</div>
          </div>
          <div className="action-buttons">
            <button className="switch">Book a session</button>
            <button className="switch services-action-button">Our Services<span className='right-arrow'>→</span></button>
          </div>
        </section>
      </div>
    </div>
  );
}


export default App;
