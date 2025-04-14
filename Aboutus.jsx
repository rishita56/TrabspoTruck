
import React from 'react';
import img1 from './assets/scooter-1027345_1280.jpg';
import img2 from './assets/scooter-1027347_1280.jpg';
import img3 from './assets/scooter-1027350_1280.jpg';

import './Aboutus.css';

const AboutUs = () => {
  return (
    <div className="about-container">
      <h1 className="about-heading">About us</h1>

      <div className="about-cards">
        <div className="about-card">
          <h2>Who are we</h2>
          <p>
            TranspoTruck is a modern transportation and logistics platform designed to make
            delivery smarter, faster, and easier. Whether it’s sending a parcel across the city
            or hiring a vehicle for bulk transport, we bring innovation to every mile of your journey.
          </p>
        </div>

        <div className="about-card">
          <h2>Our Vision</h2>
          <p>
            To become a trusted logistics partner that bridges the gap between senders, receivers,
            delivery personnel, and vehicle providers through a single, powerful digital platform.
          </p>
        </div>

        <div className="about-card">
          <h2>Our Mission</h2>
          <p>
            To redefine the logistics experience by making it accessible, reliable, and tech-driven —
            for individuals, businesses, and delivery partners.
          </p>
        </div>
      </div>

      <div className="about-images">
      <div className="image-box"><img src={img1} alt="Delivery on scooter" /></div>
      <div className="image-box"><img src={img2} alt="Fast delivery vehicle" /></div>
      <div className="image-box"><img src={img3} alt="Secure package delivery" /></div>
      </div>
    </div>
  );
};

export default AboutUs;
