"use client";
import React, { useState } from "react";

const testimonials = [
  {
    text: "This cake was absolutely delicious! The best I've ever had!",
    author: "Jane Doe",
    date: "August 1, 2024",
  },
  {
    text: "Wonderful service and beautiful presentation. Highly recommend!",
    author: "John Smith",
    date: "July 20, 2024",
  },
  {
    text: "The custom design was perfect for our event. Thank you so much!",
    author: "Emily Johnson",
    date: "June 15, 2024",
  },
  {
    text: "Fantastic experience from start to finish. Will definitely be back!",
    author: "Michael Brown",
    date: "May 10, 2024",
  },
];

export const Testimonial: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNavigation = (direction: "next" | "prev") => {
    setCurrentIndex((prevIndex) => {
      if (direction === "next") {
        return (prevIndex + 1) % testimonials.length;
      } else {
        return (prevIndex - 1 + testimonials.length) % testimonials.length;
      }
    });
  };

  const { text, author, date } = testimonials[currentIndex];

  return (
    <div className="testimonial-slider">
      <h3 className="testimonial-title">Hear From Our Happy Customers</h3>
      <div className="testimonial-slide">
        <p className="testimonial-text">{text}</p>
        <div className="testimonial-footer">
          <span className="testimonial-author">{author}</span>
          <br></br>
          <span className="testimonial-date">{date}</span>
        </div>
        <button className="nav-button" onClick={() => handleNavigation("next")}>
          Next
        </button>
      </div>
    </div>
  );
};
