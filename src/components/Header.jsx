import {
  Link,
  NavLink
} from "react-router-dom";

import {Menu,ChevronRight} from "lucide-react";

export const Header=(()=>{
  return (
    <header className="header">

      <div className="container">

        <nav className="navbar navbar-expand-lg">

          <Link
            to="/"
            className="navbar-brand"
          >
            <img
              src="/images/logo.png"
              alt="Biolytical Technologies"
              className="brand-logo"
            />
          </Link>


          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainNavbar"
            aria-controls="mainNavbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <Menu size={24} />
          </button>


          <div
            className="collapse navbar-collapse"
            id="mainNavbar"
          >

            <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-3">

              <li className="nav-item">

                <NavLink
                  to="/"
                  className="nav-link"
                >
                  Home
                </NavLink>

              </li>


              <li className="nav-item">

                <NavLink
                  to="/about"
                  className="nav-link"
                >
                  About Us
                </NavLink>

              </li>


              <li className="nav-item">

                <NavLink
                  to="/products"
                  className="nav-link"
                >
                  Products
                </NavLink>

              </li>


              <li className="nav-item">

                <NavLink
                  to="/services"
                  className="nav-link"
                >
                  Services
                </NavLink>

              </li>


              <li className="nav-item">

                <NavLink
                  to="/contact"
                  className="nav-link"
                >
                  Contact
                </NavLink>

              </li>


              <li className="nav-item ms-lg-2">

                <Link
                  to="/contact"
                  className="nav-cta"
                >
                  Get In Touch
                  <ChevronRight size={16} />
                </Link>

              </li>

            </ul>

          </div>

        </nav>

      </div>

    </header>
  );
}) 


