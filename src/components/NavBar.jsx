import "./NavBar.css"

function NavBar({ animateMain }) {

  return (
    <nav className={`navbar ${animateMain ? 'navbar-animateMain' : ''}`}>
    <div className="nav-container">
      <div className="nav-logo">
        <img src="logo.webp" alt="" />
      </div>
      <ul className="nav-menu">
        <li className="nav-item">
          <a href="#services" className="nav-link">
            Services
          </a>
        </li>
        <li className="nav-item">
          <a href="#about" className="nav-link">
            About
          </a>
        </li>
        <li className="nav-item">
          <a href="#contact" className="nav-link">
            Contact
          </a>
        </li>
      </ul>
      <div className="nav-button">
        <button className="buttons">Book a Session</button>
      </div>

    </div>
  </nav>
  )
}

export default NavBar
