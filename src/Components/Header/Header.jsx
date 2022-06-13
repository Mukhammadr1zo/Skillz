import React from "react";
import "./Header.scss";
import logo from "../../Assets/Images/main-logo.svg";
import korzinka from "../../Assets/Images/shop.png";

const Header = () => {
  return (
    <header className="site-header">
      <div className="site-header__top">
        <p>One week only—50% off all courses with code 50OFF at checkout</p>
      </div>
      <div className="site-container">
        <nav className="navbar site-header__nav navbar-expand-lg">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <img src={logo} alt="" width={135} height={44} />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mb-2 mb-lg-0 mx-auto gap-4">
                <li className="nav-item">
                  <a
                    className="nav-link text-white"
                    aria-current="page"
                    href="#"
                  >
                    Courses
                  </a>
                </li>
                <li className="nav-item ">
                  <a
                    className="nav-link text-white"
                    aria-current="page"
                    href="#"
                  >
                    Free Workshops
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link text-white"
                    aria-current="page"
                    href="#"
                  >
                    Blog
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link text-white"
                    aria-current="page"
                    href="#"
                  >
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link text-white"
                    aria-current="page"
                    href="#"
                  >
                    Contact
                  </a>
                </li>
              </ul>
              <img src={korzinka} alt="" />
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
