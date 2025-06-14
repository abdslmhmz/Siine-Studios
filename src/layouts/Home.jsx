import "./Home.css"

function Home({
  zoomHome,
  setZoomHome,
  animateHome,
  setAnimateHome,
  animateMain,
  setAnimateMain,
  handleClick,
}) {

  return (
    <div className={`Home ${animateHome ? 'Home-animate' : ''} ${animateMain ? 'Services-animate' : ''}`}>
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

        <div className={`home-text ${zoomHome ? '' : 'home-text-zoom'} ${animateHome ? 'home-text-animateHome' : ''}`}>
          <h2>Your Story. Cinematically Told.</h2>

          <button onClick={() => handleClick(setZoomHome, zoomHome, setAnimateHome)} class={`buttons ${zoomHome ? '' : 'buttons-zoom'} ${animateHome ? 'buttons-animateHome' : ''}`}>
            Start
            <img className='buttons-icon' src="play.svg" alt="play icon" />
          </button>

          <h3>Click the button and start exploring</h3>
        </div>

      </header>
      <section className={`sectionHome ${animateHome ? 'sectionHome-animate' : ''}`}>
        <div className="action-text">
          <h2 class="sectionHome-title1" className="action-text1">bring your</h2>
          <h1 className="sectionHome-title2">VISION to LIFE</h1>
          <h3 className="sectionHome-text">Creative production studio offering full-service filming, video editing, pre and post-production solutions.</h3>
        </div>
        <div className="action-buttons">
          <button className="buttons">
            Book a session
            <img className='buttons-icon' src="down-arrow.svg" alt="play icon" />
          </button>
          <button onClick={() => handleClick(setAnimateMain, animateMain)} className="buttons services-action-button">
            Our Services
            <img className='buttons-icon' src="right-arrow.svg" alt="play icon" />
          </button>
        </div>
      </section>
    </div>
  )


}

export default Home
