import React from 'react';
import {Link} from 'react-router-dom';
import './Home.css';
import bgimage from '/Users/rishitachoubey/Desktop/transpotruck/my-app/src/assets/istockphoto-2157040201-1024x1024 copy.jpg';

const Home = () => {
  return (
    <div className="home-container">
      <div className="homepage">
        <nav className="navbar">
          <div className="logo">TranspoTruck</div>
          <ul className="nav-links">
            <li>Home</li>
            <li><Link to="/about">About</Link></li>
            <li className="dropdown">
              <span className="dropdown-toggle">Services ⬇</span>
              <ul className="dropdown-content">
                <li><Link to="/sender">Send Parcel</Link></li>
                <li><Link to="/track">Track Parcel</Link></li>
                <li><Link to="/hire">Vehicle Hiring</Link></li>
              </ul>
            </li>
            <li className="dropdown">
              <span className="dropdown-toggle">User Modules ⬇</span>
              <ul className="dropdown-content">
                <li><Link to="/sender-dashboard">Sender Dashboard</Link></li>
                <li><Link to="/reciever-dashboard">Receiver Dashboard</Link></li>
                <li><Link to="/delivery-personnel">Delivery Personnel</Link></li>
              </ul>
            </li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/login">Login/Signup</Link></li>
          </ul>
        </nav>

        <header className="hero-section" style={{ backgroundImage: `url(${bgimage})` }}>
          <div className="hero-overlay-text">
            <h1>Welcome to <span className="brand">TranspoTruck</span></h1>
            <h2>Your Smart Logistics Partner</h2>
          </div>
        </header>

        <section className="why-choose-us">
          <h2>Why Choose Us?</h2>
          <div className="features">
            <div className="feature-box">
              <ul>
                <li>🚚 Hassle-free parcel sending & tracking</li>
                <li>🚛 Reliable vehicle hiring for all transport needs</li>
                <li>📦 Seamless user experience across devices</li>
              </ul>
            </div>
            <div className="feature-box">
              <ul>
                <li>📊 Dedicated dashboards for senders, receivers, and delivery personnel</li>
                <li>⏱️ Real-time updates and smart delivery management</li>
                <li>🔐 Secure data handling and privacy-first policies</li>
              </ul>
            </div>
          </div>
          <div className="cta">
            ✅ Ready to ship? <br />
            <strong>Start by sending your first parcel or hiring a vehicle with just a few clicks!</strong>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
