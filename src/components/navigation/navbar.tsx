import React from "react";
import Link from "next/link";

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
        <li>
          <Link href="/search">Search</Link>
        </li>
        <li>
          <Link href="/cart">Cart</Link>
        </li>
      </ul>
    </nav>
  );
};
