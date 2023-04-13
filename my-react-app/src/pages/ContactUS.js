import React from 'react';
import axios from 'axios';
import './ContactUS.css';
const ContactForm = () => {
    const [formStatus, setFormStatus] = React.useState('Send')


    const onSubmit = (e) => {
        e.preventDefault();
        // setFormStatus('Submitting...');

        const formData = new FormData(e.target);
        // perform validation
        let valid = true;
        const email = formData.get('email');
        const phone = formData.get('phone');
        const fname = formData.get('fname');
        const lname = formData.get('lname');
        const message = formData.get('message');
        if (!/\S+@\S+\.\S+/.test(email)) {
            alert('Please enter a valid email address.');
            valid = false;
        }
        else if (!/^\d{10}$/.test(phone)) {
            alert('Please enter a valid 10-digit phone number.');
            valid = false;
        }
        else if (!/^[A-Za-z]{1,10}(?:['-][A-Za-z]{1,10})*$/.test(fname)) {
            alert('Please enter a valid first name.');
            valid = false;
        }
        else if (!/^[A-Za-z]{1,10}(?:['-][A-Za-z]{1,10})*$/.test(lname)) {
            alert('Please enter a valid last name.');
            valid = false;
        }

        else if (!/^(.{1,50})?$/.test(message)) {
            alert('Please enter a message with a maximum of 50 characters.');
            valid = false;
        }
        if (valid) {
            setFormStatus('Submitting...');

            axios.post('http://localhost/React_Assignment2/my-react-app/php/saveForm.php', formData)
                .then((response) => {
                    if (response.status === 200) {
                        setFormStatus('Submitted');
                    } else {
                        setFormStatus('Error');
                    }
                })
                .catch((error) => {
                    console.error(error);
                    setFormStatus('Error');

                });
        };


        axios.post('http://localhost/React_Assignment2/my-react-app/php/sendEmail.php', formData)
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.error(error);
            });

    };

    return (
        <div className="main-contact">
            <h2 className="form-top-heading">We would love to hear from you!</h2>
                <form onSubmit={onSubmit} className="contact-form2">

                    <div className="form-group">
                        <label className="form-label" htmlFor="fname">
                            First Name
                        </label>
                        <input className="form-control" type="text" id="fname" name="fname" required />
                    </div>

                    <div className="form-group">
                        <label className="form-label" htmlFor="lname">
                            Last Name
                        </label>
                        <input className="form-control" type="text" id="lname" name="lname" required />
                    </div>

                    <div className="form-group">
                        <label className="form-label" htmlFor="email">
                            Email
                        </label>
                        <input className="form-control" type="email" id="email" name="email" required />
                    </div>

                    <div className="form-group">
                        <label className="form-label" htmlFor="phone">
                            Phone Number
                        </label>
                        <input className="form-control" type="tel" id="phone" name="phone" required />
                    </div>

                    <div className="form-group">
                        <label className="form-label" htmlFor="message">
                            Message
                        </label>
                        <textarea className="form-control" id="message" name="message" required />
                    </div>

                    <button className="btn-danger" type="submit">
                        {formStatus}
                    </button>
                </form>
                <img src="images/contact us banner.jpeg" alt="image" className="back-img2"/>

        </div>

    );
};
    export default ContactForm;