import "./main.css"

import NavBar from '../components/NavBar.jsx';
import Services from '../components/Services.jsx';
import Ourwork from "../components/Ourwork.jsx";

import Footer from "../components/footer.jsx";

function Main({ animateMain }) {

    const contentTypes = [
        { title: "Social Media Reels", icon: "📱" },
        { title: "Podcasts", icon: "🎙️" },
        { title: "Event Filming", icon: "🎬" },
        { title: "UGC Content", icon: "👥" },
        { title: "Product Creatives", icon: "📦" },
    ]

    return (
        <div className={`Main ${animateMain ? 'Main-animate' : ''}`}>
            <NavBar animateMain={animateMain} />
            <Services/>
            <Ourwork/>

            <Footer/>
        </div>
    )
}

export default Main
