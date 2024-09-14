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
      </header>
      <main>{children}</main>
      <footer></footer>
    </div>
  );
};

export default HomeLayout;
