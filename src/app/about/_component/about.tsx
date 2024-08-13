import React from "react";

export const About = () => {
  return (
    <div className="about-description">
      <div className="about-us-image">
        <img src="/images/mocha.jpg" alt="About Us" />
      </div>
      <div className="about-us-text">
        <p>
          Welcome to <span className="highlight">Slice & Dice</span>, where
          every cake is a work of art. We are passionate bakers dedicated to
          crafting cakes that not only taste incredible but also create
          unforgettable memories. Our journey began with a vision to blend
          traditional baking with creative design, offering a unique experience
          for every celebration. Whether it’s a birthday, wedding, or any
          special occasion, our cakes are made with the finest ingredients,
          ensuring each slice is a perfect balance of flavor and beauty.
        </p>
        <br></br>
        <p>
          At <span className="highlight">Slice & Dice</span>, we believe in the
          power of personalization. Every cake we create is tailored to reflect
          your unique style and story. From classic favorites to innovative
          designs, our team works closely with you to bring your vision to life.
          We pride ourselves on our attention to detail and commitment to
          quality, making sure your cake is as memorable as the moment it
          celebrates. Thank you for letting us be a part of your special
          occasions. We look forward to continuing to sweeten your celebrations,
          one slice at a time.
        </p>
      </div>
    </div>
  );
};
