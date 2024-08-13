import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <nav className="nav-footer">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/shop">Shop</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
          <li>
            <a href="#">Search</a>
          </li>
          <li>
            <a href="/cart">Cart</a>
          </li>
        </ul>
      </nav>
      <div className="footer-divider"></div>
      <p>&copy; 2024 Slice & Dice. All rights reserved.</p>
    </footer>
  );
};
