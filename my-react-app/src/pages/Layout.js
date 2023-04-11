import {Outlet, Link} from "react-router-dom";
import './Layout.css';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import React from "react";

const Layout = () => {
    return (
        <>
            <nav>
                <div className="a1">
                    <img className="logo" src="images/blinkit.png" alt="image" />

                </div>
                <ul>

                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/AboutUs">AboutUs</Link></li>
                    <li><Link to="/CheckoutPage">CheckoutPage</Link></li>
                    <li><Link to="/ContactUS">ContactUS</Link></li>
                    <li><Link to="/ProductPage">ProductPage</Link></li>
                    <li><Link to="/CartPage"><ShoppingCartIcon/></Link></li>


                </ul>
            </nav>

            <Outlet/>
        </>
    )
};

export default Layout;