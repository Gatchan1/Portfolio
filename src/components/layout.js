import * as React from "react";
import { Link } from "gatsby";
import {
    container,
    navLinks,
    navLinkItem,
    navLinkText,
    heading
} from "./layout.module.css";
import Header from "./get_header"; // called this file get_header bc otherwise Gatsby goes dumb.

const Layout = ({ pageTitle, children }) => {

  return (
    <div className={container}>
      <Header/>
      <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link to="/" className={navLinkText}>
              Home
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/about" className={navLinkText}>
              About
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/blog" className={navLinkText}>
              Blog
            </Link>
          </li>
        </ul>
      </nav>
      <main>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
    </div>
  );
};

export default Layout;
