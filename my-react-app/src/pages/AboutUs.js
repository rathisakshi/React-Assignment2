import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
    return (
        <div className="about-us-page">
            <img className="banner" src="images/aboutus.png" alt="image" />
            <h1>100x retail in 5 years</h1>
            <section>

            <p>

                Imagine needing something when you are at home and getting it before you have tied your shoelaces to step out. We are revolutionizing e-commerce by making the stuff most important to you, available to you in a blink of your eye.

                We want our customers to focus on the more important things for themselves and not need to plan for the little things that life needs on an everyday basis. We are here to get your chores out of your way.

                Our mission is – “instant commerce indistinguishable from magic”. Using a backbone of technology, data sciences, and rich customer insights, we've built a dense and fast network of partner stores enabling lightning fast deliveries in minutes.

                We are already one of the largest e-grocery companies in India. Our ambition however, is to be 100x this size in the next five years.

                In order to become one of the most important e-retail companies of our generation, we need builders who can think on their feet, take extreme ownership and commit to making outcomes happen. If you are ambitious, smart, and don’t have an ego about it, we’d love to hear from you.

                Opportunities to create $100 billion businesses in India are rare. We are on the way and looking for the hungry.</p>
            </section>

            <h1>Our shared philosophy</h1>
                <div className="flex">
                    <div className="imgchange" > <img  src="images/aboutus1.jpeg" alt="image" />
                        <h2>Mindsets & leverage points</h2>
                    <p>We believe that being a leader is a mindset, much more than it is a title. And are codifying the operating principles that leaders at DeliveryDine follow at all times</p></div>

                    <div className="imgchange2"><img src="images/aboutus2.jpeg" alt="image" />
                    <h2>Learning & and skilled organisation</h2>
                    <p>We are a group of people who are constantly learning the skills we need, and continuously improving upon ourselves to create the future we desire</p></div>

                </div>
            <h1>Welcome to the Future of Grocery Shopping</h1>
            <div className="paraflex">
                <p >Our website offers a wide range of high-quality products at competitive prices, including fresh produce, meats, dairy,household essentials, and more. We partner with local suppliers and farmers to ensure that you receive only the freshest and best-quality products.</p>
                <p >Our team of dedicated and experienced professionals takes pride in ensuring that every order is fulfilled accurately and delivered promptly. We understand the importance of a reliable and efficient delivery service, and we strive to exceed your expectations every time and give our best</p>
            <p>We believe in providing exceptional customer service and building lasting relationships with our customers. We are committed to your satisfaction and welcome your feedback and suggestions to help us improve our service.We always accept constructive criticism and work towards it.</p>
            </div>



        </div>
    );
};

export default AboutUs;
