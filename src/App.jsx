import { useState } from 'react';

import './App.css';

import Home from './layouts/Home.jsx';
import Main from './layouts/Main.jsx';

function App() {

  // State variables to control the zoom and animation effects
  // for the Home and Main components

  const [zoomHome, setZoomHome] = useState(true);

  const [animateHome, setAnimateHome] = useState(false);

  const [animateMain, setAnimateMain] = useState(false);

  const [animateBooking, setAnimateBooking] = useState(false);

  // Function to handle the click events for Our services button
  // and Start button in the Home component.
  // It toggles the zoom state and triggers animations
  // in the Home and Main components as needed.
  // If a second function is provided, it will be called after a delay.
  // This is useful for chaining animations or actions.

  const handleClick = (func1, var1, func2) => {
    func1(!var1);

    if (func2) {
      setTimeout(() => {
        func2(true);

      }, 1500);
    }

  };

  // State to manage form data and submission status
  // This state holds the values for the booking form fields
  // and tracks whether the form has been submitted.


  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    date: '',
    time: '',
    location: '',
    description: ''
  });

  const [selectedDate, setSelectedDate] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [bookingButtonClicked, setBookingButtonClicked] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

 const handleSubmit = async (e) => {
  e.preventDefault();
  setBookingButtonClicked(true);

  try {
    const response = await fetch('/api/book', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();

    if (response.ok) {
      alert('Booking submitted successfully!');
      setSubmitted(true);

      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        date: '',
        time: '',
        location: '',
        service: '',
        description: '',
      });

    } else {
      console.error(result.error);
      alert('Failed to submit booking. Please try again later.');
    }
  } catch (error) {
    console.error('Network error:', error);
    alert('Something went wrong. Please check your connection.');
  }

  setBookingButtonClicked(false);
};


  return (
    <div className="App">

      <Home
        zoomHome={zoomHome}
        setZoomHome={setZoomHome}
        animateHome={animateHome}
        setAnimateHome={setAnimateHome}
        animateMain={animateMain}
        setAnimateMain={setAnimateMain}
        handleClick={handleClick}

        submitted={submitted}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
        formData={formData}
        setFormData={setFormData}
        animateBooking={animateBooking}
        setAnimateBooking={setAnimateBooking}
        bookingButtonClicked={bookingButtonClicked}
      />


      <Main
        animateMain={animateMain}

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
  );
}

export default App;
