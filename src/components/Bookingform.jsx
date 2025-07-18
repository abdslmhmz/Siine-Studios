import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { format } from 'date-fns';

import './Bookingform.css';


function Bookingform({ submitted, handleChange, handleSubmit, selectedDate, setSelectedDate, formData, setFormData, bookingButtonClicked}) {

    return (
        <div className="booking-form-container">
            <h2>Book a Session</h2>
            <p>Use the form below to request a session with our team.</p>
            {submitted ? (
                <div className="confirmation">Thanks for your request! We'll get back to you within 24 hours.</div>
            ) : (
                <form onSubmit={handleSubmit} className="booking-form">
                    <label>Full Name*
                        <input type="text" name="name" required onChange={handleChange} />
                    </label>

                    <label>Email Address*
                        <input type="email" name="email" required onChange={handleChange} />
                    </label>

                    <label>Phone Number*
                        <input type="tel" name="phone" required onChange={handleChange} />
                    </label>

                    <label>Company or Brand Name
                        <input type="text" name="company" onChange={handleChange} />
                    </label>

                    <label>Select a Service*
                        <select name="service" required onChange={handleChange}>
                            <option value="">-- Select --</option>
                            <option>Pre-Production</option>
                            <option>Filming / Production</option>
                            <option>Podcast Recording</option>
                            <option>Event Coverage</option>
                            <option>UGC / Reels</option>
                            <option>Product Creatives</option>
                            <option>Other</option>
                        </select>
                    </label>

                    <label>Preferred Date*
                        <DatePicker
                            selected={selectedDate}
                            onChange={(date) => {
                                setSelectedDate(date);
                                setFormData({ ...formData, date: format(date, 'dd/MM/yyyy') });
                            }}
                            dateFormat="dd/MM/yyyy"
                            placeholderText="DD/MM/YYYY"
                            required
                        />
                    </label>

                    <label>Preferred Time
                        <input type="text" name="time" onChange={handleChange} />
                    </label>

                    <fieldset>
                        <legend>Location Type*</legend>
                        <div className="location-type-container">
                            <label><input type="radio" name="location" value="In-Studio" required onChange={handleChange} /> In-Studio (Kouba)</label>
                            <label><input type="radio" name="location" value="On-Site" onChange={handleChange} /> On-Site</label>
                            <label><input type="radio" name="location" value="Remote" onChange={handleChange} /> Remote</label>
                        </div>
                    </fieldset>

                    <label>Project Description
                        <textarea name="description" rows="4" onChange={handleChange} />
                    </label>

                    <button className='buttons' type="submit">
                        {bookingButtonClicked ? (<i class="fa fa-spinner fa-spin"></i>) : null}
                        Request Booking
                    </button>
                </form>
            )}
        </div>
    );
}

export default Bookingform;
