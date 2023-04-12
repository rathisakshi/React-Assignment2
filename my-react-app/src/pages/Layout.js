import {Outlet, Link} from "react-router-dom";
import './Layout.css';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import React from "react";

const Layout = () => {
    return (
        <>
            <nav>
                <div className="a1">
                    <img className="logo" src="images/deliverylogo.jpeg" alt="image" />

                </div>
                <ul className="list">

                    <li className="l2"><Link to="/" className="a2">Home</Link></li>
                    <li className="l2"><Link to="/AboutUs" className="a2">AboutUs</Link></li>
                    <li className="l2"><Link to="/CheckoutPage" className="a2">CheckoutPage</Link></li>
                    <li className="l2"><Link to="/ContactUS" className="a2">ContactUS</Link></li>
                    <li className="l2"><Link to="/ProductPage" className="a2">ProductPage</Link></li>
                    <li className="l2"><Link to="/CartPage" className="a2"><ShoppingCartIcon/></Link></li>


                </ul>
            </nav>

            <Outlet/>
            <footer>

                    <div className="row">

                        <div className="col-2">
                            <h4 class="col-2-heading">Useful Links</h4>
                            <ul className="links">
                                <li className="links-child"><a href="#" className="a3">Home</a></li>
                                <li className="links-child"><a href="#" className="a3">Shop</a></li>
                                <li className="links-child"><a href="#" className="a3">FAQs</a></li>

                            </ul>
                        </div>
                        <div className="col-3">
                            <h4>Contact Us</h4>
                            <p>1234 Main Street,<br /> Anytown USA 12345<br /> Phone: 555-555-5555<br /> Email:
                                info@grocerydelivery.com </p>
                        </div>
                        <div className="col-1">
                            <h4>Careers</h4>
                            <p>Join our amazing team </p>
                            <p>Mail your CV : hr@grocerydelivery.com </p>
                        </div>
                    </div>

            </footer>
        </>
    )
};

export default Layout;