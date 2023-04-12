import React from 'react';
import './HomePage.css';


const Home = () => {
    return (
        <div className="home">
            <div className="banner">
                <img className="banner2" src="images/banner.jpg" alt="image" />

            </div>
          <h1 class="header">Shop By Category</h1>
            <div className="top">
                <img src="images/breakfast_pc.jpg" alt="image" className="breakfast" />
            </div>
            <div className="breakfast-child">
                <img src="images/museli.jpg" alt="image" />
                <img src="images/oats.jpg" alt="image" />
                <img src="images/spreads and jam.jpg" alt="image" />
            </div>
            <div >
                <img src="images/beverages_pc.jpg" alt="image" className="breakfast" />
            </div>
            <div className="breakfast-child">
                <img src="images/coffee.jpg" alt="image" />
                <img src="images/tea2.jpg" alt="image" />
                <img src="images/juices.jpg" alt="image" />
            </div>
            <div >
                <img src="images/dry fruits and snaks.jpg" alt="image" className="breakfast" />
            </div>
            <div className="breakfast-child">
                <img src="images/dry fruits.jpg" alt="image" />
                <img src="images/seeds.jpg" alt="image" />
                <img src="images/Trail Mix.jpg" alt="image" />
            </div>

        </div>
    );
};
export default Home;