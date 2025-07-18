import "./main.css"

import NavBar from '../components/NavBar.jsx';
import Services from '../components/Services.jsx';
import Ourwork from "../components/Ourwork.jsx";
import Aboutus from "../components/Aboutus.jsx";
import Bookingform from "../components/Bookingform.jsx";
import Footer from "../components/footer.jsx";

function Main({ animateMain, submitted, handleChange, handleSubmit, selectedDate, setSelectedDate, formData, setFormData, bookingButtonClicked }) {

    return (
        <>
            <NavBar animateMain={animateMain} />
            <div className={`Main ${animateMain ? 'Main-animate' : ''}`}>
                <Services />
                <Ourwork />
                <Aboutus />
                <div id="booking">
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
                </div>
                <Footer />
            </div>
        </>
    )
}

export default Main
