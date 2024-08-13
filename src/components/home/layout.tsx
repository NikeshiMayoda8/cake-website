import React from "react";
import { ReactNode } from "react";
import Home from "../../app/page";

interface Props {
  children: ReactNode;
}

const HomeLayout: React.FC<Props> = ({ children }) => {
  return (
    <div>
      <Home />
      <header>
        <h1>My App</h1>
        {/* Navigation, etc. */}
      </header>
      <main>{children}</main>
      <footer>{/* Footer content */}</footer>
    </div>
  );
};

export default HomeLayout;
