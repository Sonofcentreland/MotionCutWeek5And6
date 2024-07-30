import React from 'react';
import '../Styles/Home.css';

function Home() {
  return (
    <div className="home-container">
      <div className="home-hero">
        <h1 className="home-hero-title">Delicious Home-Cooked Meals Delivered</h1>
        <p className="home-hero-description">
          Discover the convenience of our Tiffin Service, bringing you the best
          home-cooked meals right to your doorstep.
        </p>
        <button className="home-cta-button">Get Started</button>
      </div>
      <div className="home-content">
        <section className="home-section">
          <h2 className="home-section-title">Why Choose Us?</h2>
          <p className="home-section-description">
            We connect you with local providers who deliver fresh, nutritious,
            and delicious meals tailored to your tastes. Experience the comfort
            of home-cooked food without any hassle.
          </p>
        </section>
        <section className="home-section">
          <h2 className="home-section-title">How It Works</h2>
          <p className="home-section-description">
            Simply browse through our menu, select your meals, and place your order.
            Our trusted tiffin providers will deliver the food right to your door.
            It's that easy!
          </p>
        </section>
      </div>
    </div>
  );
}

export default Home;
