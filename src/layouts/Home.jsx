import "./Home.css"

import Bookingform from "../components/Bookingform"

function Home({
  zoomHome,
  setZoomHome,
  animateHome,
  setAnimateHome,
  animateMain,
  setAnimateMain,
  handleClick,

  submitted,
  handleChange,
  handleSubmit,
  selectedDate,
  setSelectedDate,
  formData,
  setFormData,
  animateBooking,
  setAnimateBooking,
  bookingButtonClicked
}) {

  return (
    <div className={`Home ${animateHome ? 'Home-animate' : ''} ${animateMain ? 'Services-animate' : ''}`}>
      <header className={`header ${animateHome ? 'header-animateHome' : ''}`}>
        <div className={`home-dark-filter ${zoomHome ? '' : 'home-dark-filter-zoom'}`}></div>
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
          fetchpriority="high"
          className={`logo ${zoomHome ? 'logo-zoom' : ''} ${animateHome ? 'logo-animateHome' : ''}`}

        />

        <div className={`home-text ${zoomHome ? '' : 'home-text-zoom'} ${animateHome ? 'home-text-animateHome' : ''}`}>

          <button onClick={() => handleClick(setZoomHome, zoomHome, setAnimateHome)} className={`buttons ${zoomHome ? '' : 'buttons-zoom'} ${animateHome ? 'buttons-animateHome' : ''}`}>
            Start
            <img className='buttons-icon' src="play.svg" alt="play icon" />
          </button>

          <h3>Click the button and start exploring</h3>
        </div>
      </header>

      <section className={`sectionHome ${animateHome ? 'sectionHome-animate' : ''} ${animateBooking ? 'sectionHome-animate-booking' : ''}`}>
        <div className="action-text">
          <h2 className="sectionHome-title1 action-text1">bring your</h2>
          <h1 className="sectionHome-title2">VISION to LIFE</h1>
          <h3 className="sectionHome-text">Creative production studio offering full-service filming, video editing, pre and post-production solutions.</h3>
        </div>
        <div className="action-buttons">
          <button onClick={() => handleClick(setAnimateBooking, animateBooking)} className="buttons">
            Book a session
            <img className='buttons-icon' src="down-arrow.svg" alt="play icon" />
          </button>
          <button onClick={() => handleClick(setAnimateMain, animateMain)} className="buttons services-action-button">
            Our Services
            <img className='buttons-icon' src="right-arrow.svg" alt="play icon" />
          </button>
        </div>
      </section>


      <section className={`booking-section ${animateBooking ? 'booking-section-animate' : ''}`}>
        <Bookingform
          submitted={submitted}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
          formData={formData}
          setFormData={setFormData}
          bookingButtonClicked={bookingButtonClicked}
        />
        <button className="buttons red-buttons booking-red-button" onClick={() => handleClick(setAnimateBooking, animateBooking)}> Go Back </button>
        <div className="footer"></div>
      </section>

    </div>
  )


}

export default Home
