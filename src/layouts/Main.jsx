import "./main.css"

import NavBar from '../components/NavBar.jsx';
import Services from '../components/Services.jsx';
import Ourwork from "../components/Ourwork.jsx";
import Aboutus from "../components/Aboutus.jsx";
import Footer from "../components/footer.jsx";

function Main({ animateMain }) {

    return (
        <>
            <NavBar animateMain={animateMain} />
            <div className={`Main ${animateMain ? 'Main-animate' : ''}`}>
                <Services />
                <Ourwork />
                <Aboutus />
                <Footer />
            </div>
        </>
    )
}

export default Main
