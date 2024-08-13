import React from "react";
import Link from "next/link";
import { ShoppingCartOutlined } from "@ant-design/icons"; // Import the cart icon

export const Navbar: React.FC = () => {
  return (
    <nav>
      <div className="nav-left">
        <Link href="/" className="logo">
          Slice & Dice
        </Link>
      </div>
      <ul className="nav-center">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/shop">Shop</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
        <li className="search-item">
          <form className="search-form">
            <input
              type="text"
              placeholder="Search..."
              className="search-input"
            />
            <button type="submit" className="search-button">
              Search
            </button>
          </form>
        </li>
        <li>
          <Link href="/cart" className="cart-icon">
            <ShoppingCartOutlined /> {/* Use Ant Design cart icon */}
          </Link>
        </li>
      </ul>
    </nav>
  );
};
