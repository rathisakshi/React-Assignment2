import React, {useState} from 'react';
import './CheckoutPage.css';
const BillingPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zip, setZip] = useState('');

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        let isValid = true;

        if (name === 'name') {
            // validate name input
            const regex = /^[a-zA-Z\s]*$/;
            isValid = regex.test(value);
            setName(value);
        } else if (name === 'email') {
            setEmail(value);
        } else if (name === 'address') {
            // validate address input
            const regex = /^[a-zA-Z0-9\s,'-]*$/;
            isValid = regex.test(value);
            setAddress(value);
        } else if (name === 'city') {
            // validate city input
            const regex = /^[a-zA-Z\s]*$/;
            isValid = regex.test(value);
            setCity(value);
        } else if (name === 'state') {
            // validate state input
            const regex = /^[a-zA-Z\s]*$/;
            isValid = regex.test(value);
            setState(value);
        } else if (name === 'zip') {
            setZip(value);
        }

        if (!isValid) {
            alert(`Invalid ${name} input`);
        }
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Address Added Successfully")
        window.location.href = "payment.js";
    };

    return (<body className="billing-page">
        <div class ="all">

        <form onSubmit={handleSubmit} className="form-contain">
            <h2 className="formheading">Billing Address</h2>

                <label>
                    Name:
                    <input type="text" name="name" value={name} onChange={handleInputChange} className="ip-style" required/>
                </label>
                <label>
                    Email:
                    <input type="email" name="email" value={email} onChange={handleInputChange} className="ip-style" required/>
                </label>
                <label>
                    Address:
                    <input type="text" name="address" value={address} onChange={handleInputChange} className="ip-style" required/>
                </label>
                <label>
                    City:
                    <input type="text" name="city" value={city} onChange={handleInputChange} className="ip-style" required/>
                </label>
                <label>
                    State:
                    <input type="text" name="state" value={state} onChange={handleInputChange}  className="ip-style" required/>
                </label>
                <label>
                    ZIP Code:
                    <input type="number" name="zip" value={zip} onChange={handleInputChange} maxLength={7}
                           minLength={5} className="ip-style" required/>
                </label>
                <button type="submit">Submit</button>

        </form>

            <img src="images/billing2.jpeg" alt="image" className="back-img"/>
        </div>
        </body>

    );
};

export default BillingPage;