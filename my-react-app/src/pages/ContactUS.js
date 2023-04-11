import React from 'react';
import './ContactUS.css';

const ContactUS = () => {
    return (
        <div className="form-container">
            <p className="para"> We would love to hear from you!</p>
            <form class="main">
                <h2 className="heading">Contact Us</h2>
                <div className="form-group">

                    <input type="text" id="first-name" name="first-name" placeholder="First Name" className="style" required/>
                </div>
                <div className="form-group">

                    <input type="text" id="last-name" name="last-name" placeholder="Last Name" className="style" required/>
                </div>
                <div className="form-group">

                    <input type="email" id="email" name="email" placeholder="E-Mail" required className="style"/>
                </div>
                <div className="form-group">

                    <textarea id="query" name="query" rows="4" placeholder="Please enter your query" className="style" required ></textarea>
                </div>
                <button type="submit" className="btn">Submit</button>
            </form>
            <img src="images/contact us banner.jpeg" alt="image" className="img-on-form"/>
        </div>
);
};

export default ContactUS;
