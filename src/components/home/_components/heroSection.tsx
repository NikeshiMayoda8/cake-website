import React from "react";

export const HeroSection: React.FC = () => {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <h1>Welcome to Our Cake Shop</h1>
        <p>Delicious cakes made with love</p>
        <button className="hero-button">Order Now</button>
      </div>
      <div className="hero-image">
        {/* <img src="/images/heroCake.jpg" alt="Delicious Cake" /> */}
      </div>
    </div>
  );
};
