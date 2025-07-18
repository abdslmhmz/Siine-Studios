import "./NavBar.css"

function NavBar({ animateMain }) {

  return (
    <nav className={`navbar ${animateMain ? 'navbar-animateMain' : ''}`}>
    <div className="nav-container">
      <div className="nav-logo" onClick={() => document.getElementById('services').scrollIntoView({ behavior: 'smooth' })}>
        <img src="logo.webp" alt="" />
      </div>
      <ul className="nav-menu">
        <li className="nav-item">
          <a className="nav-link" onClick={() => document.getElementById('services').scrollIntoView({ behavior: 'smooth' })}>
            Services
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" onClick={() => document.getElementById('our-work').scrollIntoView({ behavior: 'smooth' })}>
            Our Work
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}>
            About
          </a>
        </li>
      </ul>
      <div className="nav-button">
        <button className="buttons" onClick={() => document.getElementById('booking').scrollIntoView({ behavior: 'smooth' })}>
          Book a Session
          </button>
      </div>

    </div>
  </nav>
  )
}

export default NavBar
