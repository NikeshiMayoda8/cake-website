import React from "react";

export const HeroSection: React.FC = () => {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <h1>
          <b>Welcome to Our Cake Shop</b>
        </h1>
        <p>Delicious cakes made with love</p>
        <button className="hero-button">Order Now</button>
      </div>
      <div className="hero-image">
        <img src="/images/birthday-cake.jpg" alt="Delicious Cake" />
      </div>
    </div>
  );
};
